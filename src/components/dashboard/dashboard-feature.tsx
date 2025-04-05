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
    "2rmsx7maZ9P273sE4kA7X668wMNEVXChkfSsUVhkvYXSYsT6REc2BHJcA2iMC1yVAKDVb6pBqtoDGayt3Tdtxdku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45edboTUrJUuwG2SmSXLjM8Vo1XCbbyewdSkJ97gkeJxABuzwJ8rbPat4ebcGy4aacC9XbNMaEAbktMTxoVXXnZM",
  "key1": "3PMsZ58JKe3wmmvGtdpYtV2zVMWbmisPVxuc9WwU2FpEqoZhV2fA8UBVxsZqQ9Jq9J826pJctd3FTD6VLsL93zDe",
  "key2": "4R2Pa3dTzQjszQrfW8uUTWBWGiBQ6zCiztnHkumij7kpG9Jqak4DX7hAcKNcht8sGLzEDMGiViszwAs66rMUizpd",
  "key3": "5omFaRQkxFovpdr5yPsk9MNh7T89U5mxgahVKEvtqpm4uveZH5YHkkfcyfmpjzWfSLsdvTKjEX9SBbgFqoVJHHgP",
  "key4": "5GwDVQkMCsKiMvJXkyVWSwkA3ERnNeTxfvzt2JrsS4dJq1dv6ruefhiuhuEnwP1qrq9BCPgFVPpiJdV3mFtH3BD1",
  "key5": "4geFgyH5jWzwbFJt26zs3F8VCN9qPuFwuRguvDbw742FByFBgrr4gPj91UtNjfSvgfRapM9GVBW5hoSBpaJ4JMkA",
  "key6": "3Xv8VvddP4ZtnpsRZXNj2vv75msYfSz3JM5xzzwghCcLC9iz9saAhPsryYjvmFvW7jtiyctYtNF28rvZcGX9xa5b",
  "key7": "2hsLMebXGaDP99L3f9ZGGu2JT9VCMgeqFJ3YgVnG4bgxTZN7xFnZC2qrEVnduB1TdfmuCjqHnZRzivN1jEEME6ge",
  "key8": "4jiesWYTfRHQco21JN8Y3bpP36E6wyYbgAcfxax3LoJHwU4QJ6bhigAvbWMcFVz4Zs4ZEoReoPYWu4yYum5micS4",
  "key9": "4WpjB6q7aJuoAWLMyKezNEQgHfYdWDtwoi96aeDWhWGXSeNZVUKS9XgZZ3NwphwxoqqdGgtTnPV1AVcEQLs5hrGx",
  "key10": "7cKMqy6zDR9dked79Tx9cpP2QG4p8kqA3Te9kty875dstVYsHtMjXygD4mRkZtUc9SX9nRBN5iMeyS5iMscHVRu",
  "key11": "4gpA5dnE86XFRVTtzcjbXUhemDo5h4x7Y52nMbPiC1iTJY2pcH6dGHLfWrhX4URcavi2DWSeyHkEXe7eBNZW9Wmy",
  "key12": "2r8ADy15XRiuo3DXGc2tQ42XTKRGQ6CDcFqRDZfV4zfd1BBqD3VxXSnNeg5sj88Vk8jVNN2rT9ysAK32Dw9Md5y9",
  "key13": "2Ge4k5GFunW7v5MxeQGa9QicY2SgSFxuNRdb9WFiMV6vZQWckrn9mbCfAD2rZenogzvuqkEjVJQgBdttJ2YMi1jN",
  "key14": "5xmTodDLon5u4fhpcYv8C14ZcwBdKKpYnqwKW3K7HCX86xEUit23DRNuxeJK9rQLYY1bh5y8WRaJKPiQ6WVpVbwS",
  "key15": "2kZizMuy1w3Yzu6DFZna96HqraezT2BMXxB8tpB6KVhb4mVqjHyMVQcVeDdLuHpz9iCUAs9jSDdk1dEKPey9c1eC",
  "key16": "eYB7cVzAQoja4cznD4v4XdSyiABXkGeZq8m8vz5kVLkmA8ayTs9tagP6bwdGpjeoioBYxrXPgXeG9MVY5nLXNHU",
  "key17": "2n9NBTTHPtUtGs3RMv599FzWiio9wF5cLNTAEANaNnutwPH2du32W9mkxRtCEVPdcB4A7AU1oSU8txAhikLBziv5",
  "key18": "6PCmXihxEtk9C6nvBzp3RK3Si1QrumDqvTXEmmMgFqjraKLb5m7jpc8hPnLqEGocNvB2ShY5a1pam61cVAVcbKf",
  "key19": "4FrCSZusjBjmSJuNegv2Rnjzma1Ua5Vm4LEYNF5QEMbNgFgGe6bZg6B4gAfsaXxJv2cLrGJeyDF8JPQxYB8jkqRT",
  "key20": "uouBiUVH1RoJBDPpFwk64j1KbEvQa1nyBiDndYHB9r4sHRDtas97d8i4QtKQoBC9CPq5Tj7dzgPQASmWz6dtCBB",
  "key21": "Umt8ygJJZLvZ8wk7ARzXKQUvDmqPRxM15VNtb8852xUxvmZRDFJ6WenUev252Mg6J6xcMkUsXccw1dxST9bPqPD",
  "key22": "2D2ZprtsDfrxFJK5fR8mAoEwGp8EXf5ctcY48S9YjhSsPgBg7vG48evpFiDCzi5GkespLZzAtP13Zr6jjXwD6GBb",
  "key23": "Ug5SueuBVJCWfR63oDFAWfnBxgzg3FtHWT9mmxVhBrU5GGmRtWkwSjwkXamev9BDy6XKKXtUT2UkXVj6C4X283p",
  "key24": "4BFhTiwWbdKmrEBQygWnywncGCnQur52UYrtQ2MiACgAZCTvLSTQV3FNUMnqWsMERyBcFyiFKAzHYo56pG2R3S26"
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
