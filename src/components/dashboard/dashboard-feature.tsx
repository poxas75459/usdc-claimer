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
    "2uN2W21QhKc4QVLUVuEKBbbxuPiVVvF8QSbEA2wq7pfhWpDkmywjUgHqaYQUVtUP4T3GqifncoG5UVp4MpK8BVwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pS51TCa5E6Eo2mTbMGP9FLL46DZdDVufimGCzmazE8RPrawAxVhjj1Ea1DFmNA2XkEvwnNv497wtGjq2i9yzXZp",
  "key1": "4JKwSWAC26uhd4U5Wt6GZ2dwLAUsm8etSZAnUgMP6r28HHmBHHFxkSwGXQVGR5xwCYG7CpgdAcvtwLk8xuLdETym",
  "key2": "PV6FWPNCoXYepNVChLn7uksvPMHfD3tCBtcYhqrFEYRGEf3pg8XrVGm86wvMTBQjWLXbSYGKHUN3Gn42yL3W8Mh",
  "key3": "2JJ2Q1KK26Q84jvXBDTonNddN7VE6tjvJgWSuSeAii5tZfP4TQinBFVht6BZPuVUBLG261YoTGQZ3ZNoNpybbtNx",
  "key4": "5QzgRckLoCGZL7o1h5HnFpE8GLm5aaEL4XstYQaq9WSXofJmC7rrPepyc3wjcRnQEVcpkPrbULjHX4hrUjXYqwWi",
  "key5": "3LCasqCqvyVTTQJJWtJCqmahr9kTnZGD4TYedbDwB9yq9nUuBjeiXkAqzBXEkGYZSM4msqJzahrsKtuAzCuYUS66",
  "key6": "5eKfdkCCLCcKKPETzjiay8Ua5y7cASd5eERxGWFZxhjXQNkt2GXk7qQCfzdm1Us8VK73WKKMV5vegc92Ddec1LmL",
  "key7": "s8Q32bSFwVLKSGsVy4fkatu9qNvYWWsQgvbH2WYbrEbg1Ztk4UcuYmMPDtaUUvekQDQzsZaXAv9RoKj3wszbZ5E",
  "key8": "2YtoRUF6erxb4sLHKfrGvkJcUZ3EpvmQ6dW1cGx5t22uHeT7WrDAQr4R2Br2vBe7Mpnuk4mXQ7KyBTaRopkF3N7N",
  "key9": "3tbHs8GATcKrmjBAKvDCiq6t3iKmhV6iLe9VQNAziWdRcY1NEXFWeP1fw3VDqHXCfxttFwNZJXbqYxFNkP7B2ja4",
  "key10": "2WhJf8qS3enxoS1Aihro3ANYrRmnSKZYoCUTLLWTqqxG7UmWgPqA2v5KgdQhpiHTsdkYmgr3vgqXn8aAn8ANjKyf",
  "key11": "q31L61xDb5EwZdZi44zKsxSrgZ4eHVzYN5o3vH3xEFUuRabSCwzLXH286taKsGBcQjp4xiY54YFJKXicAgqFiNh",
  "key12": "4qvpPC9atvExDoAaYLhaHWytTzM8uqKsvjoS2NFqyN7L3aUFuP1m73QBUHs63J8vXXytqFh7j3LPsXnhYco7VAqm",
  "key13": "5Y1iCRRmAmoGNEeNvdHobDTeTjd3wCc9UeoorgYEK2tRAJLjuiuj3ZDoigPwuShagg5bk4AwGtQMRUryhZvH5tGR",
  "key14": "5YpergXWGqFUE5ovkhmHKhFB8kPTeAwQ4a9YEAikKG21krdfiVhEtE2YoNdVjpuXMuRd9goqQcxt47apSfANFHDb",
  "key15": "4b6XP2hRJvRLxogkTaLFEPG4RVxS23PiNhfy3NukTkEUCAgBYDRLY8rsNX7WiiHxdbGqrUCa3iPnmhYh6qMfaBsv",
  "key16": "4ZbrcVST5MkfFpctKehScN22ysNFseehFssuSwB9z3J6qixaHSuEBDyFjYweLmydiShWz2FQaJM8Ro38jj45AEFt",
  "key17": "5WZZCPVLyLY8hUR5duiq7QjSd5Cie4gdVwVXw5y8jQ9SPnhEqJTih1Rwzg4xkvRo8rNowz4muZ2SviN3CaRpiRYn",
  "key18": "4EhBXvj1SefQ2UBdjEWrRmCYHB2kTteHRvNPoWdMY7av5Lx1HM8ip2pDXvhkGhdNK6Mq8J1jiVwG3N85sZgRViFS",
  "key19": "yL6k9ymEUgEnqRGJMUjQnV8w3c63eqxjixdWHWu8tfPK4RUCApEmmUvprciKegRuhFJ1Aq5XXksMnbxkpzHr9Ko",
  "key20": "4ntxkGCUaFXuBXmdrfJvgoMfa2p6rsL8zMWpw46b88xtB8Dumm1M2qxk1Ui3Ak8GfdDvEUknLBcYDb7tFBE7f3ky",
  "key21": "UpecvyjtBk2toRfXaUseVK4io9BtPSt1i6ghkm2mZFHPXNeckN4eY2RTt7bXm2hV8tqXVfZmTugn75eNuZYfZkV",
  "key22": "Z7ixGZjhTGrbgq9TXHxRvXXtCvcWcxH5HVb53QNrxnhG3QdKj5FwjUhbPRbZ4WrBQhs1Ht5amSzXm3rdQvmmH41",
  "key23": "7anLJoWRFf8XqghcuSWkJMxTinJNsDZYFfYiWvdfUfDsBZLzNZ6TX8WRAvj7eBxZUhA6AjKnDZnx3JAEdfi6Zuo",
  "key24": "2bxbpGyUqGaNQxmJU89g2D3gETQesCS2se4TXD2WfFPcwiBxWuicrDBVzRATtnTdQ8F1hZHtyAxhoqjtdwcHBYDt",
  "key25": "2XQcjsHRptLD5193czamJ1h57XGcPUvzfrTA9miCNs5i4gJ3k2KaRuF41jUBjdTntNs4eViZtFjHjWNHYELm2u2j",
  "key26": "2fLEpKXPGwVX6FsNce6fPcVVsLVbZoKUbYsoEws2aWJBVoX4Xvp13fRW3sHbLDupcJEacDoUujXs3NEzi5ZJPjLb",
  "key27": "3FSR45Mmo1FXQCPcN6vTouoFB5i5vFaCHUdDS2dz7E9qPLjHUN6Fv8L4vQnk2EjSRGamygdLGpj2rWRpx6dxV9Fv"
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
