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
    "5jcybKXbRgvbNvCaGb79TKY3scKnotyagsBmRcueGjenPaerBCRJKD6bgtV9Fv5C3J1nqnknHJq8jasiqoYeu8Gn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GToXbrE3Yi78DLUbrRkDBe6SLLsRG957Nc2N6QebvspESDzNaXrgcgqtCdz1EW1mDUxz4nCaS6N63ZJoJxpEM7k",
  "key1": "P3vwut1iVyzqgBpqTyfdAFNZrZykpYqm81NcUUqN3adb7GvoTK8TStQzzUzeZ48TH3CUPUAsSUiLWT22AHpsXeh",
  "key2": "41MchKjth2xPeyNxRjwKVu2V5Guc6Tn6URXDuWGkqR14PBY3EpJ8Fw1a3B3X86KJCTABRANcat84SXAjCt8d1pFZ",
  "key3": "5vqFUSPZSws5H8QVy5u43UwJS8WvTbXMbjFZdDeypxNmQkvzoyEE8fvMqB2D713GWjeGAeSLYbokojms5PFMpK2r",
  "key4": "47unVoukPZ8A7NcGviHrui3CCMZz9DdgzMnBJHnPj8rHv4mK4KoEF9TLKwiRxpygvtjLLrLTheijKvTX4QdEg31b",
  "key5": "3fomCJQuG27FQvHteYrp7PXhDbVawxCbNMtxMftEcw4ydgZBdGAgaUay6QKacyU2yFJ9dsEtDuHVhRM7uYqAK55D",
  "key6": "Fx9i5k7rD1BEoJghLcKUsDxcoHyeNvVYjeQJTZEy65PHSLrNinxrkaHmUZUAZrfjpPXzuyzBYtRUdu2emUGWXPw",
  "key7": "4CjwKg6nsnTBK3obirGCHv8hGsVT2xfdvhisZzA2QHFyxt8YCNCC7FYS2L5GWJoyEPXTu4CRNm7rBWBGXw9ZGTS8",
  "key8": "fmiNG2d7bQjrtPX8qYZQ6Zchwsjfcb5EBEstURR9ovbv1zh8ffxjNRxZUK6SRnPx6c3V4kd8zwVvYDTJKnFmK5A",
  "key9": "3CBaP2vtQrMjevBcexnB7J1ohLtiBBWxKCJDscqu35JurxEF27dg1sxjhrPFfKWBcckZ3RWAGQtWouSbizfiMQ9H",
  "key10": "627YWrEu8d923HMLwbfWNxW4gXGJDCm6ZohHYT9MRTT7GMTzpbBANXQDu9A1bMgWrfBCf2QufSoEsLkVM7W9zMT2",
  "key11": "3FeudSgpJkXS1Z9nQC1his8o93ndzyLQU78SsDSU6K6AvpLav1fPEfC27SWnT1t23hMzSTH3wjfnVhHaRHxi1iVw",
  "key12": "3vxAsZyN2w4xxmFbUDYwnyQySGo8K3NbfGz5xxebJzwo9fj2ofKYq75Et6M73mcFPB76ZbmX6g79dNmgBoFaN6m9",
  "key13": "DD4CmQVXthc1yrN9vWs5MmzHAupJfrguWbJDehsdhYkDcoAAh1g6JLbtN7yogebcyyGRNkTMKKb81AKDRmoUCfM",
  "key14": "3pKu4kWgYfewtn5PLmaucuQC8Wn2UVNRJKzaGdZjdistWLkdr2vVbEHdHqDe6cfH6r92sn6oH2b8gfdNud8A61YQ",
  "key15": "27qH34uqYsHqcvw2BAzdcdJ5yKSt6aGi5r5RAzDfFTZfnxhbhSjhbKK2Za9bvu3sB1dDnctykHT6zvTYpEyMBEyc",
  "key16": "dDwrxo59o9zhiFfbY67MD9tuPQmg2dxerWLjAyqNqjsLtonPqZbuH3b6E81GNPnU23XDLAxMY2ysgCGPrHtvgbY",
  "key17": "54JxTr9BKjd7rcmvRAvxhEivrr6FhQ4dthyQNznbBAKyKqsJ7GHsMCXeJCAvg3zTfkrwBx4KSgEFnQqrsnLNWD9S",
  "key18": "48CMNBaNvf2BHVMCZEeUz3JHKXAC2J8V9tjCX13eTLCJWaEafzgQextMu8je4GDXSCgQG1aM6jBPzwphESYqbrpH",
  "key19": "3ro2sM6TtsgHh3TuUht4EkabNXjJjrxwf1xdPEscGSy9u7788aRpHhto6CgaehFjVuJhYiaeZxuyx8dsuCCezoCo",
  "key20": "2fap66UynqHKGw7jtRBWXSMQyS3GRP3LNX5UPVtRAiuKBA4nBrc7nM8Af1TuML86ZeZ6qPfiivkNNdHAdK4EDuzQ",
  "key21": "2eoumy6hgohgZ8ruu4GBeLeCacFYVaopDvuSFwMk5UBLX4NKYzbxX66mhqKmX33DxkpgNcACbrtW2PeDY4EqKnt4",
  "key22": "568m23WHWHVxfpSN9APfnkCdP24RLJTm1VR3cQXKLanro6f8DFEuHR8T8wkBwDGx72EMBPHrjDHJdbEkh627hw5s",
  "key23": "3xaPMA3zeSLWs7v4ZzevxSu1vmRJcEGafdrQBYq1cdK8V8f63W2KE6XrhmdRwTwrGv7msZ19N49Z6GRYk1GAprg3",
  "key24": "24mvK2p9LtGZRsQEwR3p95BhAuHCdaVGPQJ46Mkh1QFrsrXLpUABuxjxXejriFN4eEPSGcViAaFrkU6mUnz9fbpX",
  "key25": "WES37Kiwcrhs2wPEGS2AZ4C4s17nsufvNUbpiYdAhHMY9LNY7FbW1sHeN4wk3vEWfwk9P76hnFaPbYrZdNz4SLa",
  "key26": "4PLyngydPQmgArevvMGaJgwMi12z5g5mv1yrzAbNU3wGRW2nW564yEzPTkUgzWm9UPwJ4SzuvhYfWP65uoRcDtRP",
  "key27": "oFseXa9D4cSxTGWpDEdPTPCkU4y3TFRZTZ12bwVh8fMBApgB3dYKaHgnJBCZfPWyn6KfPdsV8GZvx1zfmrek6RZ",
  "key28": "2Nx1PwkwZavv1DZUd4dRzsKcXDHyhmtgnT8EAXfHjU8EHvXMd6HcKwi33uFnYYJvd5EJzNsaetBY1bj3Tgoh1U7n",
  "key29": "4bdMfrhdAyFFfmWVyeoz7329NYLqLA1Nyw2yVkZN41LqbKqxUss4uXW5gweRa4VvpNr9BkRoiunUwCsmKTAXMczP",
  "key30": "2r9gSdMnaU2K147jHdrNHkxFBJHe6xjuH1rsZiTKJKaRsWvFktqFaLQJPYSpMz3kDTuJPqKZ2AwxUNVT78FunqCC",
  "key31": "3vfTb3U64mFNw2jtTHaZrn7sPEJDd5dbzpGQpaJhxiERFgQKTMarFrtLumLz8QWd1xPBmMVP8a89qcHGrtT5zZDL",
  "key32": "37CAqht5Xt5ubB4D961tnWiJxpaLSDXr5H6gbWHY4UfPXDXmfQRbgnykg9aJjXp3bL6L6sfGzirUf4dFMmsPr5DQ",
  "key33": "24AzMKpwZcjgFCu5AEsxNwNdGQYDLgBHTZN4VRpf5eaLau6XkBRNCXSzb8fMoJqCC8YrvKRmmv8sZh2ifnbr9ajM",
  "key34": "56yBLK9Mv5qrDFTUDyPZTmRQJkYuyiE5KD1r7bSMT8YiJsKEe8H73aKueQ7wDyND3imXMKgyetRDUaU8CyNULGLX",
  "key35": "5bnfsup6N4UiM3VkkgpQsANVDLQKYbCjdAM176AGxuzvwDFECKy4M8YvgeMb3jq17WMsGQ8objDseuXQtD8sfNR4",
  "key36": "38DZgq3BaqGLh7xieQuXKTdMNkXFE1qxNNFvWUMwoGiyKaYZz2oEGL1tuZGxb3xFExgUEkNs3Bu4CCT26SNjPfrk",
  "key37": "5vFYDxAkB3keLLChmUuiQYU7dauHhi8oPe2q27vX3Gk9e728tfJ7quggRpwCW7y7oLjrrkt7zyA5pZtR49VLUP6a",
  "key38": "b3hViG832vXsFvEUhzURkwgKaaxFKfB1Bg9P5ukoc5vgmK1rKpxFaenMWedHbwLCmucVpxchHRFbBSsHc6dTpQ3",
  "key39": "2X1WNP3FoXEdJ7e3kwzsqDcRwk3yumU6KpFbh5WD5VaGUtqXNGLHqmrEPhD57USVsJatVzmFBGCWBYjGipGxyYic",
  "key40": "43DcFcvduEA1LfbXNhXTixbZLbTtw4mj6Jy2vWuMJu5x9j53QUcb8H3HuC83aXfECxtm2JPRSXw4X8QYfjTSvduh",
  "key41": "4zS3sca6PD5TBmTzAc4PFkHWq8dhcnDDTaH8w2jZswe9ccH82cXVPhx7UGpzGcUHYZ422x2hNb6944vNt5TB4bcx",
  "key42": "3gFGJCh8FJWyqX5DyDLZdnRVKy264ZK1X6rnRAgKydSiRURMVNrr44VBGmo3HUEcadD4UNCuNTL1YDNSTnMhNf6z",
  "key43": "dsK1ktU2QSK8k46JDU1xRRKu1KDVsGSDDBC1PEVZsQhLu1ZMRn6jLSqW7FV1JdrWtZ1AhgEHDiP7EQTeravKx6X",
  "key44": "4Ww6AqNSinEGB14tumA7vVJ5BSdhSMbohr6EbcJTvyga7XBRv78JyANrcndiMtAahD5tYze9ExNMvduDqXMRhBVQ",
  "key45": "5AsdHdn9cmTTb77QsfTSLBTtfn7yxFiviQ8JVRHCvVXCd8xKEA3RLLWtPTopLZu7WofGjVzBzhV158kEQmcmMetA",
  "key46": "4eqhJhXkSznJhAQ9jGGZkyiFwC2jy1vr5oXrFm1PSAFkQorsrqcRh23xDrDAdGsFbFxGp2joozyhDn1njEFrnATw",
  "key47": "ejgHytX5mvnQdHVxG2PtMbXQy2NdEhj2MUBgxLGPz21HqDdLCNbvVVUXHVnDEJ3e5c7qYrWihPanWXNJfq1nKsx"
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
