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
    "59kN5HmbNJkXnTwTRigasa2qN3GatTDoKmp3bqvbvd1cyWUegJngbsTXq1vh6mPyC5x9u2jwHmvRvpWEMyxMJYX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w7U1iCdcGmsgRnLsAS6uXsP3PMEay2dBkiifGARjzTVeiKTNWSs7hQyJP46snssm9pNeNt8JLWosisXeLvxjMLS",
  "key1": "37V8Un4Mu9RbL8St9cgwDhJKaoAqNRyyzuDJNnbdMNzH4pd4e2MBKVoVRzUYT2mA96keWk7yAfDYRKz1V5pGt5sM",
  "key2": "2p968mAMxyUqhHCL3efuUfmTHvh9vZKrwBRZqsaeYFVfVU6TdZKMN2v75R3QR5cRnE1jmDyW8JCQxwkhGyg9oo9q",
  "key3": "3TYdTHpT6f9Z82uerxwfa6jLDhbX7jHJ8sY9HrPhvJu9vvgfFZ8hPZ2oo5p7YESZkNTv3EWTTR9EZ5vT8hyGyPek",
  "key4": "3s6zDs1Lp43ed6srqWCwp8mW6W2HuB6NwQy8DbcBzMNWjKXPHw8BqGBFgVksAEPvwYRAznY2Evk5xW4jrMgXsZep",
  "key5": "uTdYKLKGFY1B7uR3fdPZeY7FNtDDyRDFjS5HsFStf4hQEfsA3aneHCQ7HXR57rRa1SbXzngNEykCa9YaCnKwVDP",
  "key6": "3293RB563SVYtmt71MbTZwHeYnEUjvmcVbDsD4t2qSJ2BMSWY27zVgWSBc9MridpM6iN4AmxgypJ8zdi7djV9Seg",
  "key7": "5TQFmQ54nWroNzByRTEw2knSrMNRjWgxeRXzgDPXJh7FBkuxHgFyt9nsYH1saGaK9eVGHetyzAAHJSH5UguGL9o5",
  "key8": "MQEZPzsetzfqY94d3po76tjrfWZcCuxbXpAYh3KAQM1Ex3G3ZmjahBWQVYpTVkBL68cQ6Kh7gsSCRLRaMLTP8uo",
  "key9": "4xh4tf5P7qHrUx5XXt4zfuQRmUyuWUhe2yrNuS7kuunpvu95y2gN65tNMU4CJjFY1Xb72Y7Vr7jXQTqMG18y25nD",
  "key10": "5aNuKa5h6jXRo9miM8Rr1Qvypy6GyCs7n48RMQBTT8WNBqnwRttah8s99XnTYNYWQpf6xZ6kPEDqwkQdCxNb7b5x",
  "key11": "26VQP5kWTdudhsyuDms9WvrvzYog4uLiwTDjxmZoAP46uUhxirjCGgPSCsvUzzu9dRgE4L2ho7QiuZKZAFaXh1d3",
  "key12": "4CDgjdvf3eCbfdYDuNPBcLh83T1dyvEchjY1Zd5NfnccAzqpTou5D7TN8BfipRY2RPzUYFe4pqZs3MZYgmwDSB9q",
  "key13": "5ZqpZGJdxvah9BsuySzYmnSonKGat7uahtic3GDko581kfDzek8ttQppRU1bj8uuosodfFXnkqwZf5QDNky3BGy2",
  "key14": "65XdJmfpJ3rfHPachooeZvYRXkDcxQfgRDuZB3yirX8SiVEPCL4mT5kaJgsXCgBUC8gsgJ1J9n6gn7587FBbjEf2",
  "key15": "2eEuYiGCupaSoygzg8hVLz7CWw1WzFPSpX1CHwPiJNoiowVPMRXcptzrcwdRX9yTyyCnU8QbtgA9rrgVRFm5btKu",
  "key16": "3ycfRC9jZjQWSoDoHnSMUe3X4q3KEiaQ42ziowgtuKJG5cvNJyUJAYtgsAdxv5JkGmyjncTpPdjTVRFqXKNKDa52",
  "key17": "325AdNS2N22z89UX3ZCwDn1eR1GvYCpc446pqeB9fQPfeRjMNL6B2saM6wpk7jySf56ZBq8F6rQBjrR1aduhTzPt",
  "key18": "5g4Yas9mccMrvtxbS57rxd6L4VUVgD3RQafTipo1hgzbHhvXUXWV24UMzE3LS95NyjRNBQwxowEnQ6VpX4GRo4yz",
  "key19": "3JTg8uVKFy4wigmfuqWcsyvnCf5MadWwi3VRSzNVuzCivuP7C2shgeqSxj94d7QU2mks7U5DngmbMYn6ax6DVuTi",
  "key20": "3W4JxF47Jxx8EJEZase3b7DL8XLNxxK97Nzy8DXtddtymkC6BSKxCPywagVG1YaTK2oUD854WprRTNoTEjim5RbJ",
  "key21": "3wtDiW3KK2zyUuf2mbu9pZfNQpQ4AYxBfLHdHxXXazxKLhAiCuDyWF4QKMifQjy7mg46z4eHNpVHtyxqFxwz3Saz",
  "key22": "hjffvAmgxRyiXRRLP1Nv9pGvfm4AHuJH3SVu53o8TYeK1DJGyfYxVVKCaj3SjauhyCEtV9UvhdXQFNGe6o7LaJ1",
  "key23": "64bW1w7EniW17yWrCst3d6fw8tenD5HPPMXtqX3fhZ8fNfgmobBAnZDxfAaoVyGjtKkXoMXobkpyh4NfoMMAYojS",
  "key24": "3t3hMddorpBfBoBgbNWYQoyupEA9NV7B3Yfs1B1Vu1v6XyECuKaRiAdXQNEqhEXpU5gyuY5omYpa6fwao8NRAcrJ",
  "key25": "3DFu7BV8hn8c6XfoP2S1FzndBuiduQpgT3nhZtAQQRvDuF86uWoov9FFjztyK7XiNXvRyhXAgVD39thDeutuGSLy",
  "key26": "3EhRH48LXEMg849pcrCTxaXWFMxJ4CVS5wejQtkhrUu3tWsDNJxdgcDRjUEUV15gEXh5k5BfUWuquFV7oGwuBx2a",
  "key27": "3DCVv4jKPKWcSd3F1LG6BVB8HARLknhnHgsLkE928JpuNsLpPYLmccBF7v9v8vm4UoE1HfBQRLyaZkpZnTj3Nmne",
  "key28": "4peigD9BoXHvEVkvmb4qGreQrb7A8cx6maY492c31PTZJmJSE3cBJ129PCPGjEdjzVvUWQP5gRuHNmSSNZnLBS1r",
  "key29": "2bg3rykHuqVwn8fBqUmJpMaCUh9GoG6dx9tN9i5eszZmeEXWgy6Sq2vGCXX9vtFHo92pMxrBdiVHaiWEkdR8zeJj",
  "key30": "4YKvAUkFvqM5KaWvbGEKF2a2mXnAWZqquaHS6PSxgu3iWwb5i7zdT9Jnav9HiRQAt9SxazLYcUQgTwtbaNEHiRLG",
  "key31": "4tuWyd2qJTasR4PxZMhqci8J16Cvtdj3MPs26YuXaCKyfzPReQ6NzK89cEYCw3xNLppQr31yid6Jc8ZJKiycwewP",
  "key32": "5sBUJNF8LcNkEKsJEpeA1aTggwaoKuSzkddfeDYrDMAa7yvtmcf9oHD8txERkQWae86mFFbsX6YNSPjaJ3JegSdh",
  "key33": "5H4kPsHPbDbPKWUeYoRDiWZCjUP3KCFCqWLferScSCVRju41Sfcgf1kzocCTvuL76bcGi7twNyYcDmwqS1zux2Yq"
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
