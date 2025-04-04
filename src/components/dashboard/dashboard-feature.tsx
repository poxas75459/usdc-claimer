/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "abW8RVMd9WTtSzX5jGqVGGLcWPGa2gVNmmvqsiHW62aF9XxHWzmV8CpNLDCjvdXNGATHDWgb2a2kjPUWtGrV8CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L4ziQ7iikjcuQ4D1ChuWemubDJc4YNzeZvQaSqddaUH566rC4xTBRHvpWEjGzNmT3p8ex98QgK1YcwDn9mfsnU3",
  "key1": "2sdoFCMA7bZu1MGyzvs5tnBPVmVoidEJyvn24TdnxXCUnTNtL5cXnU5c14nCaUgKLpzTB6qCP3vc5c92HdQDaeEj",
  "key2": "21AaFP2qc4mr6asG4TPkTvs8uz7H6PWvhaRrU4qQd1MxcoMavkJuhdzfAeB4rvxWWB6ey2ToVTYNajoYF9gyFDre",
  "key3": "2ddKcpA2xEeRnHkMujMVnWzYRr1bM9r8EAZtiy61r3edjtzothnmTagmy9srYA73UNsWzbPHoR2UEatzHmuNAwZE",
  "key4": "4yGShJQjszLMkVqy5YboKDeYoWhpfzfmAZjZmeMqDYJNrfnd2RYcaTmSju7A8gU4KD7T2k9NVdECmk4jSDRvLsmQ",
  "key5": "2MgTTTGTH6dGQPgjvijmBhvw8GAq5xg82Be7kYEtEma8FFJUU1XEXuTcPF7J1WLKbFvd5m6zouNxpdCs4uPsirmv",
  "key6": "Lr3bECaYvkCcdENnBpkCKJASofrwHnjBLCe3ZcuzH7Mdt3NeZiuk8u8MRNkJm1He5C4BkFAo4pZ1J7oCfcu42gg",
  "key7": "5GdMDJZdEnyMXsqhGhW78xFJh4EbVNWPV3XTtnKmxBshqEqPR6gfpdJaFzXCR9QDstCmxRTjEdCswPpvWo7kynWg",
  "key8": "532VwNcYTSXsvfPA2CZ4oNoMJanpSviKNL6RL1WXSppEd4kzMgyXqFkEnCMnTfjMVG6fBSfMy9UvibnXYuo3Y3sT",
  "key9": "51pAzysosvy3naCzinS5Gbkaxtpq4npMdn8X7noGbhmBLYvSDWGAGbvFuLpxP7zqggoHCS5u5wW5rxobkeBXJZ4j",
  "key10": "4m7JAmZDmaqXohX1gpVW1naaeBjLhCzAyYVcwy8uRmVf1p5sSYbe5cYhmT5ApfxELTmdMjJHUpj6uiHWVgLE3hcV",
  "key11": "5qaL1mWrgu7Z5ZcyjeSew5dPWygdRok4iYZMKM2F72mgoB6ejGXBcXU7i7g8VBtcBYfJ9PBDQCRLfwuMfMgGMznn",
  "key12": "5oAhutoLtde6phQ3mHxBjyJngSrPyGKQ2yAdk7ABzLFrm8uBubhKZWzE2GC4WzVkTfatSZFWrKgVKdmMrhJdRuH8",
  "key13": "2caHJnWN8Vu95suB9QqQj7MuDEqNYKapqFK6MqeKH4Uy8PkXAawV1KRK95Bi7QP9Pun9Kn2vDQ2zkJavXS7QukjM",
  "key14": "5DLiwmC8DEcmqweFPgdf5H3WGuPStttzrAAE9PD42ADfRbAenwxXsESxNiRrkxiHAu9hvL5czENeojy3o8S7EiML",
  "key15": "4QYEeHfG2Xwe9ETvrMD9KLDPt5yV7pCibokF3q83Aii5x5sXWTYoaVaCJdLyPv4hiinzAkWPoJzYVoUCBjzWSLZw",
  "key16": "25kK6JWxjvm2ZqfCPkBWmf2syxvyvE6GxUySqgxFLNjbradcjaAgF1vihi1CC9nKFPK8awZoFT2jka2YQ6hAcmBn",
  "key17": "3rzivg2dyjizsLkUrSAWfSuwbM8g6fwyA4aMqGacaQgt9rFdDE9tpVp3SBpRk8kDxXAa9MVaNACKu6P2nBuTqJ7b",
  "key18": "67586N7Xun7FzxUFmGQNS2t38AN6N3AMJ3cJ9wDgGLk8shgQTh1GzUmmPY4SmyEMnm6rfvpVvL66SoNTmuWK7y53",
  "key19": "2rfD7PHYpsDNkv53mdss6QyeJNiQpYK4Zxjth3QfJNUfeWtup5wPo3NXU65CUshYDHFeVFAgsCjUimYyZ3FZQSYx",
  "key20": "2gGaXmpDymkP8FrenMHYg6uo8MNDLgXEiQ4E9BKh4xjg25bfuMagE6irZ9bNLQwCL5iyectUZ4cvcFpevD8As72M",
  "key21": "5cBYGwKviW3AWn847RqZ3JNwjHV43poieBcJqEj9DbfEWg7AEknnzyjW3E937V2PTj8sGTtycqDKZeGYYyNJ3R3s",
  "key22": "ifb6ePLHrVsowKRitNDdemJjM5aCTYsnp1KDacvSbcL9k3k8mQExSDCxUdQ3URuu8WwG73mgCyjKXzt1PaiFsnm",
  "key23": "4GNtQm2jp1vTcogBWVTAHRuqXhuHbLjsEXzip2iBNpLJktP1CBFjnk3VxEViCKTtNEY8jgD5W3on4p1DFHZh4BGK",
  "key24": "5iAZAxu1P8QF6awkmggRzpHjnvmG53Cn9PtnMPPeRWoY3kqwNdk8eTVXjfvTy2JG2mu89FUiouJ55nXTuhcAPVhD",
  "key25": "2BgXZxTLc3gBL85Nfu43igz7ASCLdtGdFe6LuDshxAwnNaGqxAspBWmUdZJUSXrT6adwceWHoGyzWL9h8WENtz4e",
  "key26": "4dmqYhkt5Y4UeKrKS5CcXXq2tD1BRmShPAUPyCqjD4dJmRBDoLnFZAsALESDtnrDHT38Jn6DHdXerxNQ4RpxzUVs",
  "key27": "wQun6s3wmhJgkYFMqkx43ziTFgfkHXZJ6dFDtbXqE527soEJtGFx1vDaPeWPuCcRaJyYB195YqqoqqdCSpAXYPH"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
