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
    "k5SS7GhVEbjg9kyfUiNfgZao5Mxx4EuP7XYRGeLLB8EJtVEAxEC58vTWwtH3sVHew7DCKzZswLrU5xA19DKV3Jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mhq7nioPhK69X9o922f4ikFZrHmjVkq1mokEbq82BbTbspRpSE9jtZT1aPa5duCaqVepCpH98WtX5cxrUygufaK",
  "key1": "2Wt8jhJwXc3oC18sPwroMtHkAn5YuX9HhhteS4YNF7TsqENRQfAFXYp8HZCZP4vbwLuMjEbhe1UXzSaTLyUQd7Wd",
  "key2": "MUJYXTWKmSBEZu6TNUKUZNBqE64SFNjdmcissgsYjWmHykbqiW1ZZ9FuRiHQGw9d2EUKkxmA3zyK5kVK7iwAdKu",
  "key3": "3QsDP4mDTTKGgvVsqQjxtGzX5brJ3vVuHvfHDwM7MTgv41Fk5VQ4Kq1GPwKXikagoEin73qEMMn9MsWmFFwKgrmU",
  "key4": "2PjDCjTR1pZY2HVfKEgbQEwdUYzyRByWt5iPG5uBGsEJA8c13rehrua2FBkCm82oxShCKnu5MSHMvYU4nUE3HoSo",
  "key5": "4HaxyYDNfqXUabdfwmsNNiU6wCPpRdqxkxHfy6N4m3WHAKVppbfUXpjeAyhZozB7qNdKqqJ12QMxZgpZn18yaJHs",
  "key6": "3shuwKKGq4uKiToNjMsirCSsRQHSXeToBQQGFeT9yN3BSHV6SGJzYYee612W6B3Tuso4wyhHhh4zR8x82Bni8Khu",
  "key7": "53bRbgcS6MzgjGDyqfM3BKvfxHzuHjwi9zCqAowe5Z4CXLeXhYrq1BTyqS6D9YuUf3Ui59DtcbMoMCEEQKqYBh57",
  "key8": "2EpoT1fTu1bV9Q9pojkhd8vgxkpm4iyWDJgYtF2qRNchJDeyyK3z3CXmuT31ZsMESBr8SmBin2ue76iaJqXpBovT",
  "key9": "5hCYLSNBJtuSPXxKbJYauPz1mRcGUFbqU4VRbvjDAGzpK1YjCGwpvE6JEqZg3UVKXzJSKoLzYuu13uGa3iSeJdy",
  "key10": "4Pp4jzN2xRz1Qt1W6YuVX2cxzBg6TByeuyTzLv2Lmqf1aXaZBXuba26dCkU4VEtkCx8vFWT9Zbk4hb3n33Rr72P9",
  "key11": "34srexm5zxTPzoayvjJrVhQb8N25BEpkq9epBMekYvTbBeQrcz73taRn25ZhCbmhQSd7xJYUETTHNx25dQc5VaEj",
  "key12": "4Uv8z9nuLbJEbHWwBimkbqaWSwYJrhzjcYm2mWScP8qexA2qh8Te9yqYcQcaPfHby74UTUUJFD9yjLrxKLxxmrqw",
  "key13": "5KP2SdGpuuz2NkyJFW1P6795e2mjStnMxi18LRiKRrjjUAXhUEUeMRZLxxLv6gYE21SHhquxL89kcAByHA4ctmD5",
  "key14": "2uDDkEfjxk8JjbZXuMYqTBnwtCuCnP5c7LUTAgxujmZcMcRSohTT45nVbgsChbDDeR7j2yLAZpNcuoDYduSeHhpx",
  "key15": "5bGRMyjBBW5k8N52WD8uUZhvUyhjkS4rGE85fSySQKnkMH6TmziXnGtnJHHBGkzN5w33BVhxMSSXyneB8wvMdXv6",
  "key16": "35M9Ei7kQ12xqWKEQX9k9FDvR4dGUGSGd3okKPFHyMfDLLQDD26hQj4LhjZyG1v7T1dthzVfckMCnE9C8zfQMqbz",
  "key17": "3Gr4fqjvhxwtGWiCSGjnBkgYGbpivXxQci115B2bNLRYhiPPsXRBk5PVJetj8ApUwhSEpHgjm2ffvu2t8MxrB2ZP",
  "key18": "5BTKBPBjBHDG53EG1rvDLVLPRHmGbh6dptB4Y31HJkzVgZCidHSqivzyGvSyhxBa2AuKFoEoPkx5cNmRpQSckSzU",
  "key19": "3b381gnQTj231ru7mkc8rwqDp39jMLrdBZYWfyobgxGg64HxpYkSatmfydCkSyLRzKUMvRUfUxMmSTpWZuxXPRmB",
  "key20": "2kbXXszrKvbn22XTuajQQzvHTq5eDG2DsMUMY49NvMssaLCEYpAgwjaZSDEUo7fZrU9rKGcqgKF5riqXjEVUHDc9",
  "key21": "7BkvJyCMUevhbaAu1rAN4EhotKK6dQNwTrb87CbzB5tSyB3LWeiBmmVPEXYpxbjQ6tXBHEkw9M13p9RquZj7HBp",
  "key22": "4RLyexrwFx8HjMwD9jBVVBRcPrgzuhCZQ73t1kg4E2RR3BWxXoBHrGK5A9oQh1kbJPK3rVbxhmkkVYMmjFog8bh1",
  "key23": "5rZemHbyGdAeFFUMD3yu1FGELYepVjhAwKFvQFkzVhRcir7QFFfqtxET1cGYdH16aSHyoVh3yM1iX7J8LDeoePGR",
  "key24": "4HdwVwx6NBdW1ZpxvN685KJNKgeCcTuZV66JEtbFWz5pFcbN3tWQyEuLGzWQkss2Ay5oV4x83tCKgjnU488RBLda"
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
