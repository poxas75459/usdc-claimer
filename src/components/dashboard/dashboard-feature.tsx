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
    "4jVErjEZ6bMoFGcXPNWjoysGEaywmCtGqgGuvh4gLE2QofVadGymFiGU2zt25jJfuU4ywEXGGNreY2ShELCWrEpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nmoSMFKrh4FpUAm3JPbzDZp37KtGxVkvZX58V5zVCu5LWoWzQ2C5JwecL65SSnVaRoDS8nmE7B3pjifXSfhsqig",
  "key1": "2ccyCFCpdUDk7HPJzfsye4QeY787Hx6dQG9YbvyZWKEhm4ubJkiN3avxb8KYw6chJEpqtjKDSr2CHtQbaH9zdn1P",
  "key2": "3Tt4C36DhxJXLS1m7gtQFQmT1VRtyCCgkPMZ4xDXeberDNru5PSuTLmeowASUwP6xwsRehBDakKvVbxBNTNdDZRV",
  "key3": "3xQa8FB8XSjXwbAmM7U8BsDuCNmRCwUWFMSPqGE3o9u6TaSVMszq2nd2tiDD2BVcELwzMLvJCSEqB16AmgiQ5Xxa",
  "key4": "2ZaZo2zLTY4mMPJA82ixmdsx1BuYYDws4aKQcXJxgrbhQieynSviNnGoK69pLLJbbvNFaRYqoDsYX38zRREEVPn8",
  "key5": "4VyFFkWVP1v7SWbZH3JK5dwywmffMtQc7boLGuR7gWEQp13v8RUDX78ZttBHXwmeH63Bw4inai81Wp9LvEZGV4cy",
  "key6": "2SJjvjzJSfjJ1nwo8s6qmKMTXnMqFmQ5mrg41eS5QnQ1YyohWNGJDhyd7zBj117mWm5kgbvZq8ofU55K7GDSkEFY",
  "key7": "c6mVh6WvUkzaHJxAYxnheVk7PqPnWi44DsfB3oS2q6RqU4H878GqWqUzBAgkthdcoLUZNRRDheNLji7KKQbvL79",
  "key8": "5xLBR4MyVMJsV1CymFVBbCKh6js2vodMHBf92TBUNtvm8765c53CPem6Th7vQa9BdTte7nms6fenii7ZMVK5HpX3",
  "key9": "o66TDSoUCFPqXLRqpUfLNbsWN2xqw1ZstpVaG3shmy7UBGd29nfTSpQMjZhsvJw4Jczunxdkwj9p6HAomQZcn4a",
  "key10": "4T34ie7r98xwpTsDeRzPJHFGvC75rVaWiETfqYrGfSmxrbGDXGgy8iXpD8yzkanyArFYKmznYZLDp5fMbZDxCHpk",
  "key11": "3ARTKqP5TXgGrYjvQwguyY4KDxJVq326eU4t9EumerV9mUmuH8QN6hhCNJ4GqVjEw1Zp37i3kgnKhFyE9Mb2HvcB",
  "key12": "5S4dZtKAEmjrnRabURaKBdJvNaWwH51AJYYNtmbtzrX2UiHzSJj7AYe7YhvdmEs3vmkBGa7v84SM5aicqZ6Q2HWN",
  "key13": "4SLn3vLcAaZE4tdXhnhzg7H4ApocggQUioSiEEwtoXB7Vh72JA8jJGZwekJGEqh1WCoKFaKf2C6a1dA1xpgYKkKe",
  "key14": "2ZQqiWTrqES4nSJLZGf8trAmijqYLWcdCsYQW6UbBfyYmQF5PdfY822vBCXpur91YJewwL8yRF48UeDVpkmrGQBw",
  "key15": "5xLxDkn6H8zwgLYZmSdd2tv8SK8ksE4QwPRR2JrMdfkQ3tZ3HP9oMc75Xa7T9sNwvQfxAWNmVMrZxpiMEeiWLh5F",
  "key16": "4QqK4R9RXiLY8HFHdM67MCFgC18ufrnCpkyxNm3StvH27p9pqgrEsDXDAfV4ZUYvbSkcKJY7SDTtmTCRdJfw9cyT",
  "key17": "FVHkQJPpvDyq1NdZAYtZEb1iEPPEn6uRJrrk6JppQbPpX5KgC89ZKY81jQ2m3jBqLerezn3CENrcD36JcfE3c4Z",
  "key18": "zG956p8cy6R8Sp7AL3v2mLeJ8gjYXPnbCdmy8WuZxbxcR3YTK5CfCQTyMquQcPez6b8apJ4sXD3P7G3bN9WWxtN",
  "key19": "4WKsKqJawtRKinSp5n9ooRiNA1aundhyV1vEAdHdzoPHR4BXpDaEDasueEXnEGCPiHLHLFoqwoVyRDM1WfGJYJef",
  "key20": "HkUWK5mcDw6xLVSR6P3QeCyvpq8FfsgRE5DqC3wiErLXvQgKSF43QuisgqjDZ13qX3SkqH6gdQYHTVo36kkARFH",
  "key21": "2owt1HyPyosU6qz5Jis1Cog4GG42GwHntFZh6QJfSPSs1kNkBLJLud4DewQPyTdAnpNQBTaej71Edam1kSUKKa1Q",
  "key22": "kDjfB7xy9AQabJjRgwtDR8X3iyoV8itrpV7bpz6F8TcVJjiUCCzraRtyo5srPtUCpggHBFL43ZbHCBe4qCXX8xq",
  "key23": "4b4ggFUqfautm9gTRtnw8wohC24qtfHyuQjvrWQ5CaGaM3qCn9VXfvMQ9ncGeMCXg8tzzyMAf6vPk4auqByTdRBt",
  "key24": "53jhvnCtmUrAS9NiLjsPy2FkKVeHuyNosnPGiRwa6wv2Cni2QscYNpLHaPu9fKkuFSHzykkcs9gszR6Mk9BKeq69",
  "key25": "4F9Ui97jjd5BN6me6AVkztgi9wWftWEo77rvfMXRJYptvYtj1iFAh7MWDEzzybVT2RR2CzT6eNCBC4mCCtg82oqw",
  "key26": "3LJGXVSwRSg4hCEMhQHiPCEJcVLhoV5DUsfUiRUJPBKDWvvV8vCFzdPu14tEkh34nyCGjDDbnn3voFi769NoyLn7",
  "key27": "34jzGL5V9kEEbtZ8eMrbMb79umjFR9mabANCWX2QdVUMSAghfTynvypDzoRg9GhUvi6FvsApuRYb1ZFWoM1AY5jx",
  "key28": "34niva2ZTuFkM5pvVbKWdz9cseARAKakLhW7ScQ3jSR8v8526nU9kWfj3hjpLYY8yHXQ25ma9V3tdkBPHGogj45j",
  "key29": "4JSk6mrXoL4QLQD8x4qWrhR4JFYUbGq2TELgZsPZ5WgVd8wMCGQK4pP6C2f3AxtmaY9L2wUDPEK7Vk2eQ2yL5KKN",
  "key30": "4mDDzHMcexhaLdfMFf8WrUwQAeAmYWdX8WZ8qmmCgvHegGrj9o9PDUAE8Cx46FWEdnB4wKBEBGp7aMTvqgYD6FKM",
  "key31": "27ffV6pHcYL5du8LGeDE6YjCjmoXaGNzezvsec4jSzJmFkGSdYJ3enFeZYkMzrXJAAw6pWMh8NsChR5WZCavKLsu",
  "key32": "52xoWPSq4vDys8Y5NWMTnvWMDa9eJAYbNiivPHtyTmYqBBw7JWJ7iheavPActTVzr2ToTZdEdmKecGTRcumoEwpi",
  "key33": "5xuaRE3bistBWnacPWHhbedfiXBoBvucn1EkNVXguiqksVQgWFux4EZG7FpKYbsBMQUyGNHaZiMjNree88qBX1y8",
  "key34": "4mvFrYEFXxJAAxfSKXKHgawGgG9eSdJRKwabhkSUwEww9qq2et7xoqoy1p9Qpfg3dAR7AXGFg1awzjNkMNLc1ar2",
  "key35": "2gYNFz8T5Rg77moDnjXDjqKoqDF8PkJgMo3UsLuQMfUF8VR6EvKi18KBdudxAC3JaLaXN6TNzBgphyPfNLHXSUWf",
  "key36": "94PYxLS5xjqzR7GqmMweanChSkwcZH6Xw5RghFD5e2Wb4Cwa7d986Syb3xF7dznAHmf1yZnHSMvPokM5mhk9AuJ",
  "key37": "3JAjcgBWsn6uCTo81845SZExTHw614Tpenpw2FbBS5FzJvSZ4U4QiNL9g1TPAGenZ81VuybcEDX7dEqgciXRBjWV",
  "key38": "2GCiujAV3B3VQruUDrYXanjdJjUedwabrLNQ3qc4z6mW2a8FLvLhSqJUDC8F5WuHZuwFiyoth5uBp2EU9Tzw26pr",
  "key39": "4TEjnEA58PYMXV1pVafYFScPmeXHcxd6WPBVU66aXbAZ9YU2PsdGYx12GDnf9w4HLDraHC7f8T4fwmQt7tppgDZK",
  "key40": "57jVzMB4tYL2mYM3fRToPpx8FsrLTy2MWu5xDb1Gxm7xvM8iYLAPoJxBi7cuUUiTrfRLzWVCqdccFskmnXBp5cVA",
  "key41": "2YMYtejQ3DPXB9CAMxJGSZRankpit4RATroYykcJMcLL1bUFxyKmYdrxW86q3nDWxou7pfDKZ4fB83BpqVHnPKsf",
  "key42": "5STsw88CN63yJSJtAfQnKrzFeYS28Wcxyp4jqDVMaoYAub7815aq9BBRFCHyyry9T9PqxNFnbXrZarWtRqMDTHVi",
  "key43": "2w6khmv5R4NmkMh4MdrHGzmVJ9yf8bmmwPJZZTFQJoydruevYLgFqek5LyCrjyz3egEaxg5euZqqmFNtugaCoKqo",
  "key44": "4tCxbrNVyd47aJ13W7t5hvuLXATpMrbRfEsoFnG1oGgFjLvXfmW7DWeKMX1TymwXjFGyq9x2TX495VgPcJUgCwsS",
  "key45": "5Uzyqhhr3pbFCatEwdxhHZa1PxyHNtw4RPrmuCyZ8vtwaQFA9YzXUKZ55P6XPKgVMyVQTjQ45n1sxGAudN4Sa6AP"
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
