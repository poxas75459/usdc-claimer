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
    "Q2PnnQovXe5CvvqMZ9gQKH2Cp28UebQnQKg6tF4uTfKoLDvzGXvuDCWsgeJVfFVRtsuXWtFWLCkPtA5GqavaNeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wvhUuc7jvkLf1LE6QusrJhSAD3D3pppLWCQHHxVJmbHsP7NmYP3U7gnsrxkW1eAa7AKYwo9C5eDStWpmo6e2aq4",
  "key1": "4q3wd9B2q7nD29zR8D3GaS3kBVMHz7BbQm3a58U3LUR8xz8adMTmDuFx6cgpigL9d1uYFhnSxU5mGYYCG159qeek",
  "key2": "nT9j9NymLNRJPS11ToKZ888miz92yrHBw26b2UoAYbhgXveBdc6Ky7AeYPYVe7MYB6i9eT6iHRvhWAQcb1HuHWe",
  "key3": "2tDufALrFU1S12bqLaQd3WKsAeEaCo99dsjVDB91vidRomzQFH9ovJ8ctUWJJCepeBUo18GWKbfyVFVEGkwrAiR9",
  "key4": "ERf6u4HBETNSEdnTuept6nn2WsX1uKzva7Tc3Vzpj9GAiDq8BjDeCGHhW98BNF7Heeu93PUfTPPMYN8HPCv56EQ",
  "key5": "3ZRMK4Eenhbz7wPBhBd5gMPrxKUmM5Vv1XLFt1o7SKbMp9a6vZatRMSYeWavcYRnCRAQNo8s8ynT4em8DMPKFWBn",
  "key6": "4UReLgT4H2ZKUyUmXFcG8tRopv1MVZ5vMbdBCgnbEJPkVyx4Aj6aUoJV9MxB4yFSZdtAtLSECVHaFb48FK1b6XN6",
  "key7": "5DGw5P2chiNyBKENwTXB8rFeQuA16zBPbkGmfqT63mcNGTpvAsnhXuUnNDhhngRoqQd3vdAVXrJHeVRzYL4sgWrp",
  "key8": "4TG8R12Ti2zKvsK9WwjeyHhmPNUqbDXA7PpvX667BWL9FpSTMoyn4QqEVgTrJp49AuKNfp9vZq4Pij5WzbzWbxK3",
  "key9": "4wYiD3yfw2fXFYroXzDvuea9ggdDGPPrnexhBxMQaXszUSmkiytAdG22mbuKBvw9QNxxNEjgZ66GUYNxHX746hyp",
  "key10": "4XuAuDNeSnukX8fa16GFZwukHB8o9QRky95kj3ZoD6cuTxyFTPT7fKgCmjTYCu5NGkiSt1cA7fcChw9cSpTNbYHu",
  "key11": "2uZgmX5GAixXEyBsZ6gdmH8j3q8mpB9xkXmoJvWQzaGQt9PwxWqXGqsCRF8uf46ieTtZocQzGHyZez3BVJM4L1HN",
  "key12": "2UN8bBYNvGMVoJLYeke858ts3eF9jiajvDY3U1pp2KKe2MjmVZXeJqdocpuQGDSSdouEQD2jpr73hVDkBZmu7vBq",
  "key13": "2atEceABcxzHZmVX3wFgkhi8BH3WG8dKMjbGTM2LM9L7cRSLRcSoCXrU4qGbDtKnkjVzGAv23uQw8MMvEo7jqDVN",
  "key14": "5cWaejN7HsXYFYmApTaTQgDKZb39dRMoxXY5Ucp22g8sVcqD6f1wDJ3aMVXmoZqmgB2HmGQ9BSxgiem9pZkcyEke",
  "key15": "4BRdadWKinpqt9hmaqQpCCChjxpbrvjJhr5JYHpz6Y93CTKzs2bT5atcVPZHywcY5rd16aEwDQY4VzHnWg9MhARp",
  "key16": "gGxHNF8vnc3RX2WQwrRyv8ZmoPFhydBQnpA5mkC2aTPW6n8bAXqwXms5h91mubzDDo56AcWCZi4sqmgteZNE5sP",
  "key17": "4BtLeiCazZ6tkTUQvq62T6dzSEduts4i8ZbL3kCjKKYgdJ781FoCRWcGy9MVDQm6AvWj3Lx7zKBEdt9qoZda8sLV",
  "key18": "3iyxukygUgLthzoFtEf7vGfuKZdg8sZdcrS4ikucxozREtSxrWmL6VFYyiD88tt7sjZXbV1y8zBhfGNp2hhrYHyf",
  "key19": "4N1CMx3Vg32xnQVQbuozFpQuSR3ypUFp8bAn7w3piYyKt5y1EAKUE6LbsCuveGoDLDivNMq41kbzT3CuM5oRqMbU",
  "key20": "4HVo82oKmZmLYwoodg9FLTUHtZVv6zpzvkzUN7xgqpfPyEUPHHSHxbbm274VeK3pyqbrVnKmVkVXWU5r9wwsULwv",
  "key21": "4dswyTK1iYGcuEJjf23T9cRGaKzfwDaEmVPGV42ap3r8j19D7zXEkdxYqax9DFb59uyh4JJuACc9x4vcUM8pknAD",
  "key22": "2aTNH34qt7QuRNBMj2FjrgUAyxa1hhk6S3CJt4Ea95GpWznxHBdm6cLiNHBnw9ZThBE7zZCt5vscG7p7bdD817Pg",
  "key23": "2ShuWQZQEeSEYhaaa9aAJLJMMp1k28gbmfKdTmMdNz5Huedwy4tFDjhU9Ai4gYwcQ6DT1pcByfnicWid7TcmAME",
  "key24": "4x3iWJyY2VAP9jqj5XYw8tDPJ5jSxfxKSfzT7xrXXqZq9JqYdBgEqznCkxxpYdYtTCpdiqWC4aQoVABThBfYCfuj",
  "key25": "55qF4Rp2bPnAVQNsvCUkU6V1mnf9QmDQ6w8uZm2oLGPuHgttn2NE5X36TRVrxLnVCyfhuBc3vDCLx8W2nRSvb5qy",
  "key26": "5g35JBxz1U48jYPwSkcAcRAvh2Ahf3rRuL3kravJEmxJNGg8g587PRus9pv5rNT4i1RmvpUm5QHdx6wF3z9yaMkt",
  "key27": "3yFZ3fyzFwrAJwHQVLWzy1yioGZo6PxvpfgDSTwmLE3hnrwE5kyPnmJ6dJdQg39vuhLPivCve2N581ce42pKgpaH",
  "key28": "4JkDEwFyREpsxZeV1GWAcCUDfn5ZvKM8XGUjmSd8LENMaM13uHBZHDo7c4ebSFZdKkNDauDEaXx34NZz6J1HkihY",
  "key29": "2YsHVkEUiFjYgGAEoC5YZVG1RB4eZ7WhKeR6QwHnxfFQfWN3GsjGYUHckPxPoCwtjDis6HKu7B5KyEYL6iNtBE5w",
  "key30": "2neiscp4vH5RKPRy1e5m1WPC9tmyc6ybvtQZPx2M4RwPFnu2yh8iY9o6f4BZLUWGnNkFsRpaSaVQpfbiEgDN34EX",
  "key31": "rC6m4oe2rmYCB9BsL63btd5zg2r1Xx8SQeMqv9mNSXuxRmgKHgjgTFvYuBQQAwu3anCB9aSbitaLzrpzSU8XB32",
  "key32": "3QDcFKzQNjLWnRD36aksnEJoUaRK3Zbhd9DpgQEsGiVYH92PhS9HLe6Wn9tydVvRpHfzEaCdXhqhxF4d1FZ1wANW",
  "key33": "3oGR2PtsBNC7tku8cDBzWncTqyXLucYHUSU6aaf8TAcY276Q5c6xHebsz6U1YYNGd5pMr4Saoq4fYfNQsyvLn4XP",
  "key34": "2xcTn6bXGmkdYdjeBbLtrYfkdHXFqUHwMQiAH6ABtpxKg5GWKxhMDQ7qKYmyJNChPQwny7ifbmEFvMqD1YyjMf6N",
  "key35": "Ao4E6srwYXXJ1mfV4yX6ExtezfZ9umHvgZzDvCGDfWTjVTcu5StytchJjkpWTzbFGFQZusbrJHyyavoBuG9iXfF",
  "key36": "41hSK7n7XcDSoNPzxmtMpXpGUc8KJtTNPVgCh2XTyPUAhxCQhmED5oWyGt2Q5GRT7MUCs7H8XNDKkmra7EKxQfYN"
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
