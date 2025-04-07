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
    "36mbJyH1CQwMYeo8tmuWgQnJPKutMXo6LgRCSnW4WBZbztePnkzMPpQp1TM6Lstivf8DXoh8o3qbk1J3AE5xtF2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m5uiDEM7oxFE7RTH5cQKUKuBjRFVk2s5sEuw9siP1LaB3jYaNReBHbAXDE5K27MBrvqhLg5r7HPFkmKnGNZVf4q",
  "key1": "CNXEttezkRhae74LiPKXeWSbVZwU95PKj19fpc8EtzkzLgpAXK9PH1ourjAnws8GidH8AXq34GUL5gJgr2BjivK",
  "key2": "4iKC7y9KXPNDYTr6kKqta61JrMr7S4KaQmxHubdpxPMdrdx4yFAnbCaeDSEgRYTarbVc3XfGUb3xfK5wq1N8m6hX",
  "key3": "2vsTcS3sDCBrkB5kDmwb974jiMudD1TWyF8Whuh6mjysGF9otrmCrieFFtCNVjaQ3eSDLJK1R2CJWR2Gvr7Rzcb4",
  "key4": "mwGJTjazsngZh4tumnAsu9vmMn1GFjxrq3Ea681PGMtZTwDqEcqG8HLdWoS2qLvbt9t7YG2bGUVMXArZN4xBYbp",
  "key5": "48Y7Y24bN66jtFK4u1W4iTfWL8ifQoBkmcy1Ym824fAGT1YwWVUhybgWsUqkaZRrShyAN4SotBumEhKpRyjcxGrv",
  "key6": "2wChYo3uJ8AnGAi3xS8x5qpGwkcAh361Srn4RbU32ysnofmQUD2RjgpHVGcdboiJzoUbrG9gCvBLWiDg9PMqc2Ma",
  "key7": "oxSdLsqm1aQCYh53Dp6koMKTCTmWBLMgHUaA5aps58Pb8zDo8PaiHsXN8CPRG4yC6N9iGy3WBndsQv8348TM5F9",
  "key8": "BqA3cpUDcvGpaUbjjLjuC3A5WSji9i677sysasuhQs6yJH7Ey77ZH5N5faVnDbcD4ZcjdRuBYXK7ngMfF7a6JDF",
  "key9": "33uTrnU8C5wGg8347suRxkPqrU2nBZT1YDbYy6qXoKcumyozjivNGVLLggFFGbNfLf5fYJCUUoRshQ3fJrCxxxmh",
  "key10": "3xRzEPae5eBV6p4vcu4to41dihuq5Bb8NRzDzHmzD82Gp9U6Ugw6sjUf29uL8jEZCRh1AUgC3HnjYgQBLiih1bxg",
  "key11": "5gnwXMHCTiUVzFCtZP3z2A4QHv2vgNnYvDr4rf1bcRuLSLC63Z7hy2pPShLJA2zDDzqa9avZNRQsoo6yv3GbdBHX",
  "key12": "3x551BLk3aAL5xZFyrEENnrewZY8UDPUhjN3pyVNAc2X5uTQQuuWomyNU9ofQVh43HEz4fVQi8pzgfcPTCjHPbdi",
  "key13": "4eWEbCkSCfLeS3VjFLg74tnkzZpA86tn4u4AyqgkrKAwvX1x9uCBA8ZU8v31wccSnHy8APqJBvEsytRRYyamxA3Y",
  "key14": "5MxrVEunmLTRCEnAgrSWSDp23Zs6X4d1fkDpE5VGKP9Mcy4kpZK4zot2bf8UxNyD7RPmZJs1Sno2g4mGS8nYBVaS",
  "key15": "zYaFjBAA8Y5GQk3HSueiEGQfsafrHRQssXhsa4cMuYhFu9gHKNAK4Y4AjBSm5ZkkEvxUKnfsvRU5MP3iTcGn3o1",
  "key16": "u8TXLoUwGiyQSmdm5wzTjKBmtkUQp2Wbh56F234ucNQY6LZxVSWYEijbWi1e27sDXzHsFRU4QuwA9XPGjKWMSjn",
  "key17": "3LoXWLGthdTsRdyMbmTs7st5hz4SyEongNj9banUGqiXBMEkLCN5Y3WAzzny55CJwChhGrMYxhS7Co4VC3DnwCtF",
  "key18": "3JBA92QRxmuzXZcweF1xV4nRBamuS9dqpFQbenFiYsRJUy5sEVXmR3tTNLS2erAXBntFNMuFUE4SfVzK64oTpMeo",
  "key19": "RTWYSoLS7v9nr8MgTexkeyrzfzt7UoiuT86vJH79Ku8GPY5sC9EEifKPpeif76KjqMQhFEh2uMvD3Jip3aSBtJC",
  "key20": "5pSQaf3EYgfTkzato3QM5wzRH832ox3BnPgieb8dgA2Pm3s5osVNVGqutKNuCM9NPHAMyPTp4tbsoDydLLbY5YPT",
  "key21": "4xXCrD5nuMPz3ncLRpCzWSvb1zmvn24Ps2iMNDPK7Drds3qA5d6RdZzUcssZ1XDWFWgHV53R9hh6M3QTUiRZBsNG",
  "key22": "2KrxERUVbPsnC54aWqmw6VvKFF6cTcyT51idbbZftQhiog27F8vCm84Bh2ohYT65LN1fH3rDCfiha4zXd7CemCQP",
  "key23": "2RFoBimk5ewxHyRG7UUabYVKRJ9mhGMYL3VhpFwrQsJbMaoMhDSCDqfcXNbc3fiqJG71YQTHafBBhYUnRZTPHWVs",
  "key24": "4UCAhBdfqu9gsNiBA8D45ebfV8EmSQz6WeiFrFSKxixK58wekZRAyw5PSRvjbeLFv7N9fdKXhrZ72m38pKPHKm7h",
  "key25": "3adNEqkKjG5yCbzAt6iCp8WQ6AV2pxWQkns88kY9GJ4EyGoBsy9ktZJ8uLWQkDPAyjZ4ydKmXNE4M8SL9tmoTRC2",
  "key26": "2CpHhUF3R79PovdrGEsxAcA9i6R4U52mdo5Umq6kVJuEBU86ZZUXvne8TjHVuBfJCC7hhpN9rn1DCYvFF4p7Rxg6",
  "key27": "h9YgxN9tuxKLgeJN5n2kFgsxChGQREfgWB1KsTdbAoQMpiZ9WuhDNcw8DQR2BwfdX2srrDhM2YHLejWc1Qh4ioQ",
  "key28": "3ujCuhepveXXZXTYuWNz19SPMz8UFBukDZvR9aHqqnFTpQFodWiWd5frggHhKDAXef8sbAPjZ4g7PbFRSNe4eADT",
  "key29": "5tGtgG9RZuCe1e2R4oJY5yTNBs9nw7F3WhahtFAT1rGXpzKR26fmGFdVYdbywuhS51X85ZcvF4EwwzZeQtEBZGzc",
  "key30": "41Y7WQ8VGFjz5D12QKZzYPCZH6kqRXzUroqWFSB5NbimMvg8ZtozjGKzZUUUdH2feQcYtHbTryY6xrZUKvY9bAzV",
  "key31": "5Q58oV9uCX6xbwafcGW3dpegZMw58m9n9XKUGCnkiorBDYSb4ZgpuwPRk29dMkyEgg1TStCSQHbhLnXzXjmMohja",
  "key32": "JWNg3TEGAHzcP65MiqPhUs2PuFyNwhCBM7mLezw9Swgco1fCQsqK6o4g5iUsrbL7pwY4su2vuDsnX9Z6E3KPEP7",
  "key33": "2KBU4x1Vti64FSDa9Cq5J99m7MTSj6v8MWHxrYULXJvN14meqeiEKgD7UkkzGtvGrCD6rViMog7DiECEFrJfio2u"
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
