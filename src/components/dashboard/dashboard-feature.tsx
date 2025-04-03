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
    "2dQjjCMsvgcQuqR2SdPRV7igT3UceML1QuAXeNsZUVKn1gd9F8REUrBAyNCjyKCbhooopx7ETMYe8HCrT3tEZnjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wrG7S9i1kVBjJyw4ubNx3NL2uSn8J1UuToSQDnZBdy2hEAi1zqB9xLUeYHYrtV1KLXGiHsUN41XZnFU3rXsiVDu",
  "key1": "4r76GGYySuVcFi9LPv4RwofPx91aTTcD6J2VeJqVVtU4b8Tdxo2x848A9spLsukGNLpqNkHDE3S3fkPo517zCNEH",
  "key2": "UVRzr6J3f4roq4LeimqGnnHP4mJ5nUr7mLqDzBzcqrZGqCd226qjSkTHi6AtsXRosGeRBoba89HLNRsug5k8fBj",
  "key3": "ypp71g1LVQ1iCmmH9TvYiSsvhLhhppTfv6x9mE7gbdTw4qScZMVeFBq3hVSc8nz6ifdidzKKgm6uYSS2TCS4SAE",
  "key4": "5K8QtHLf7vVKtGqBKFk6Cw44jqF5Td1yJPsUhQcZS1CZVsVrkD6QcZiBC9QGaakusPD3gUdLCPLWFHZtgfuGRJdj",
  "key5": "4qMsZzJ86jW7DBDbviTMdVFQm1bD3gVJHjNcSRDnZuCRR74LQkbtdbCWN1dUNFXCfsgcYWtrr4GuJCsmEYS9zQNr",
  "key6": "bNxSM8EiajzkGpxMa4natiALZpmWPi8VnPyDxZWmALQzKT6HrXWNirm7LfUycyBwsV5uskAigHVJeYUADVn7aE2",
  "key7": "58ugwRebu2YWdf6QzDzBLSBE5sqFxkUCfrTU5qrN2PLQe2GThQAtzUJscAg8ur3bFgsp8NjoFUgVtukSXB9azJdS",
  "key8": "2FS31njD9AamB5pESm6JN3biDgXrynY22Wvc3ocC1SEFvPfUR4nZnzNC2ax4WQgej2vumcbW2TaSneJht4MHrTxd",
  "key9": "3xtaUtaMnwbNsRK3sa2p6dhUP1cxfQhGWhv4WKms8pbQ53ZeNfSuQJaqditcGUC7R59BuBv96YDUrqDiZDYSw4uU",
  "key10": "66fMnJVXd998Sdhc355LtKsgnhZzXx97g5tNa3ewSNaUbtcHaifaihKcVfzrcyM18u9bFdHZGKwmraX8fcmusWT4",
  "key11": "2SBZbTva34KFU5bEWrtEh3PMNGFYcx6Y8kKoLFVTRQ6oM5jou897wKqRYJCcRYkRmaCz29FYkr3Fad3a8e6AVKMX",
  "key12": "4r13TaNkueUiz8ysye1j1xT1ns636x7Vgs6hYpHMUQuPKVDuuDw6aQtLyJyPhQFCdR62MvHPZMzNhB7J2muVJYJH",
  "key13": "54vFvfckmjPAC8RaZFsBi7wYgMr4JR5bXrpWeU1EWJNUrdVqR61XUt1ooUbF4WdaKvJuoM4u4kH9kgwmeG8nBsQu",
  "key14": "Ar6TZLNRF3LAe4WdiXfvaV63NvrmRcyd2eTART86rsTnUW3Wnx9oF3sQAEZ2WGT865BBdJvYv9R9mwy5SxpdQ2E",
  "key15": "2Q3TNWAjsnSZNBCPTEXYBuYkDhwrYwnkQazhsKPGkFnFi1EzS78d2hzypRTkjjGyFqPXRMWroDzjFhroey5c1Y8A",
  "key16": "65GewFMoe76u9hP4rNid9nyWZWv8nxAxXu5QwZVyzU98YBgmmYadmpDD5goruvTisYjHbrfo2FX6WZNYdmoYjD5U",
  "key17": "hoCBjpFWBnB7QF49ShtbyFaEdBNTFTzWmfSaPTNz4JnwTSr7KKx6ipmvepTizwVt9SQQseECLMQKMjZrP77dWSh",
  "key18": "Egc8BK74CdfrCLyqZrVkwEoEdVJApadjQDCUipr1uYFnow7E4n3eCmjkj7FbeiZXxBBPsgAM4qX79zPVopceo7b",
  "key19": "3YjVLQnauNjKd15hHV6j4w6nDjycG1bpQwQdgxC7ARv1gaD3QuSVtu32csV8opsPaGxao1oheAjZXoBgfCgc3YnF",
  "key20": "4Sqi3SVJdYDFtxrHpYn7H26w6cGVqeepyPv62wMfFrzDtZfNuzGkA3sqyVbSSpFa5XprFvzSC6GAKNWTDF7nQJuX",
  "key21": "3qiywBx9KRvu5JMdaXw74nRtxK5ZFnkEEgW1Ty1pbkE3yHQxDHsedwZYDTypD4MFqne3CGmZx3cvkHaT7UqgtNis",
  "key22": "2ZD4H7Fym3CF4Kj2TwP3LGE8VLjgXevFC8qYF28V18nXJoxiZVi7oZxomvVne59TwbvThmXvKZeoSfN31Ld2Qtva",
  "key23": "54CNb4ZiLzGZYV9QSwVDfvCY24wejzDMMwFQEnbohh31AoX5iG8oaC9PpDF2Ewqods6MZkHdLK8GG82bCvebps6T",
  "key24": "3kCP6mjCnerC8XcL9Kee3NjQiskVPfLaTo2FUbXDsNhYJa7qNXgiMPkC2Pyt6eTzW1UCUgiSjUB6Fs8KXhEr8mpu"
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
