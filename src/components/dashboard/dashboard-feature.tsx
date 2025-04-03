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
    "2nFqStw4mdd7RrpctjbKuhx4drJ5fgKnEAKSt7FheTiQ1tjWK79YAprkMoy5MGaG3cAt1RYkgNaQNbzjpVfK6giF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xo852T9xTV2ejqA8DefmANAvhAtoSBYK7WWBvEcuVDv6jobkGHpywWoKKEjmfF1LNyBQ8wJB3q3AZc48Gosk6oQ",
  "key1": "4fp2CbgX41wky7GxDQLnrRCi2c6vvogEtioe4g4N2T5gztNsLgCnuUieqSML5S88EuwNyaVzhKv7CEYrhxr1PvGs",
  "key2": "AaLwyXx94yG6W85wgX1tMMw3pDouxHF78YYo95QQGUoG6fin82NkGWG5FQTkddLSzprrKBsPhVCwrKXkac82T9h",
  "key3": "uGauZZWpYnsTwAejvnS2CwH7csZMeDC2KcPE2kosqb7pR7B5e8Vby9uci6TRzZ47EbTXVbGYfEdtXFRV2qBRFGP",
  "key4": "25HLK6HebTW1CyJdFphcbzu33iEMBtHf7rDhBco8d2DDxomhaYA9JW4iPpq5Vy1KCidCjnzeMpan1pDwVsw4Xay7",
  "key5": "498GmcT2y3upXjw51cJs3kZBWX6N3L39mnrhjzGPrpHiGr6Sgr2hRHnogeYAq44SSY1bBP5omxuFjsFDGZqMFM4w",
  "key6": "3UGVzuSrG2U2fePMEB6d5uNZkrz9ppbuRmjXgKK1M9f2Xhb2vSxggBtanuYTdr9PZvCN3Tbh27oB2X3Ja4iERegN",
  "key7": "4wPVhJQcRWJo6yURXcTaod2zFWnLvU22esXACP8z2azDtfpET9R2CUGHt5UBDQh82obpHkJbyGYXjBXWKygnx9Yq",
  "key8": "5Zc3Qn9XrUm84tVmUkjsbRzPG8E5tRvtHFJ9rC3y1bGCJuJxpccVyAB6M3edsxqAgiT3aJAvCUHQf7EUHhGfG9Cp",
  "key9": "52wUUTw4Rj71opmtkiWB3MLY5RxgAev6VZ42twZYSVDrJWWh1q8Bm59RseDJbwbVhN67ABVKbdr9i1gXaZB5VYRo",
  "key10": "3rpNixqUyt6cWh8YhvF3yiQo2QvnyVuqJnJEQzpyucihPjHhNzcMLk68YgXrEeysWuEoaBynUaNgpwxiYR8Ud5b1",
  "key11": "63F5tQpatd3N4zybNkZrx7f3V16SNmyAeEuKqRUxrTvEMxB4QsK9fQr116oHAwRsbhdSuA2LJY49HHfiTQmoUS7K",
  "key12": "3g76FitE18H2UsXyeJ2SuABcsi7LLtaXN88pSjVkMawWTJ7AoVc2qDmGAzc81eMZvte9sRoK3YXV57kVWYKfFzrK",
  "key13": "4B75CWkyAy93gZraVs7zNeFpcHZwZvDAihu15r8GYFLifq5E1mLMVkWnHE5v642geCHUi9rtTdUU9RzeypaP2RKR",
  "key14": "5F4WJGy99xuZbDc58v4UoE9FdeJNQjAaB4BNzThZaQjFkZRJNzV4FvUjBs9M1K9pS2Uxa4i1eQhdZbfgevv4jouH",
  "key15": "5uU9ULA8zzfaYn1BeDf9TL5FGX5HCiuq386X4d2CpecxTBQhQZRM1Ay3crQVktBwAUC4GK1522M58f8KqG44yd36",
  "key16": "QrdEJuH3etfYAKa8ic7AYdchfyztoyCdzFfQNeeg8c8BjUoaDVrnZLBCSik483aMu4oBvLmp2XjC94HevYN5iZC",
  "key17": "51g9q2bxgFtythWELLmYtqJVYVf8TppKh3d8vVykEb4pAeYcgmL9uc9dCJZBtQWkwvazE9uUiQiRs6DvEA5bHTE5",
  "key18": "VZNQuyUpc14mpZh2kehkrtJLsnnAjg9ct3cyT7szUxWv6pLCWRZk5Gai9N7TTEnXZmWf9zPgCEub2mriHkwyK25",
  "key19": "5ZdrRobrGXYkFxCzefSacESjSiiPAYhpFjqnxm5FR3qX5E2LRffsdmS9sPNNfoHXc2p9fp5ouzcQetE3cYGaFe5k",
  "key20": "2nPpMHimpTmhACC6W3eLvJWJb6PY4nhtpqZE5xp28JtJJpDez3HB9ngxmhXhtjnShEApsKiE1uwvUd48FRtuPNyq",
  "key21": "5a4JoiEr33Wz2voNc36QoAmgSSHGj3yP5MayxsqZECMXtGtHFSQeaL9EPeM7mUbQnGwNiNpgn3ePDPLn5ghcj31W",
  "key22": "Tbyriz8fPCNcVJxDwKEj1vXdej7sFUGFPDUj7xoZpGPzVN8a6W2ms25DBHcFe154EMubzqyUzKLmdkmdcsHAZo8",
  "key23": "P75vvKyne4WU5L1Cg1ZVAZjiikCtm2B45Uc784oMSkPoXQMDcQaUEeDnxYFMX5S2mhVWF5gptQ2zEqQbPckqMRj",
  "key24": "4eTPmUpV8oEpAZCe24nDJUkAS4k9eCpbYDRq48EqPoquynAVK31wL3DsfcwZUAW35ezQWyMZ1XTxqENvsjb6H1rD",
  "key25": "cNyMQ9uATdB42bRWpWJdeVdGeheXSdGoYufHrNpoJSeGd5paQ24EqN36XJmWXvfV2hn5JsMYvroLVpgshG3sKAH",
  "key26": "xvUYKWvVGEFaj8H8xNMEYQZWoGNmwgPg6tHsgigHZDeZ7gyozjucNAPzmzmWT4B7eKcTMa4EwYdvkEkAh91RJgp",
  "key27": "D7zDhqGxTnSfNqNgyo5mSGciA4c7NfffZrCdCN6gccSwJqvKTPahpZ1uyD51F9Bz1qi445TD3fNhgchqPP1qvGi",
  "key28": "4VmEakkc6NECqGLtKxfDeBDrrj4oVLRpesBAQgisr3ZBiRh7uDQEtv1FWSKU3wpsLk8pbyHQGe2o1DuznJMKdovx"
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
