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
    "348z3obsUTmiNGxsxE263D4A7fLo6BxX4ZzPoRbDiAuGvdRxAnWCUJJrZnPivtNas9nuYNMkTVgv4ab4uy6id6ET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nYpNUviNHteKBkEJ2761M3KwAyK4fcszZjBRkKV2naLa6mb8fJ5DnDKt3GfFE3X3ekDJcDm9he5MVLCqevwvgPx",
  "key1": "3yzSoWUakELjKDqsZFXTNWXQWR8yMJKvQwNrJNMJLM2c3cGu3cevgBpPmK2c5uyzZK7zZYZyNnY3dS4UG4UDkBKP",
  "key2": "3cphiEU8nsNJeXdCcPGZdrvsksfwvujACGz8ZqpnsLqTcEXKwBHyAekAMVk7ZWwH6T6VAPwsEGJ7aQuSWBFNWK8g",
  "key3": "5nahNe3dxy3xTRU6E9m61xxxWvUv7WHVv8uZpgpK3R5ZwxrDFYn9bDAaf6iCsg81H8fHFG3Wt3fSaV9d8TUoee2Q",
  "key4": "5KEajN2ZcKJFXpDnAPCERUYVe4A5xzer8Lx6MHUZxwj9GEXq9c58GWLt5Ka1xU7MWYPdveCQAd6qSW3cw6poFZrF",
  "key5": "8tykWpVUVptSHTGHBMwPMkBJVsy6hYAvfcGV5jftDCrad2M9QezdJui4LVkP3dos1DLEusVJkBfw7igQrDauin5",
  "key6": "4D8Ejg2q9rtWmYSgD9HYSzxBp11MqmJMFu8ePiNeWDwxrENyDUU5L47WRsku3mFvyjsWoj9Cc21gwruwZriYGqeB",
  "key7": "34LhPAShWoBg2f53k8JK68N2XAVHRvPeNpPcYJs7m2kUvihXMgQzwmK6xRXTtifPT5RXKdtzd4FrmkgP1D8nDfug",
  "key8": "66ecFG3unESYMfLZVPpDUZb5j5HUh4EaE6vQiG61rhcGMHRyT8kdNzUB8tpxiYbmCG3CnkaBPeFMcpCPChmQcLFW",
  "key9": "3LTs4trv3TSpSe4eTDP3zF96nxSgtmEwbjBGUhjj3GARjs4dMUjgffmWkV4ba6ZKwpyUoHuWxVc6aatgzvHtpYAU",
  "key10": "3DGcYv6PcQkry1kWBeQExzkCuQV6ejnNsnHorrFAhxQSBbxe1RaUfWKHDfDv1DyMKWJpVZPtQ2xbhnMxNPHa4xsU",
  "key11": "26htZ9j9KXSSuMXaQp6Ug3qthJ4xNosu4Tcs8GXNUqPr5NGHYsw7d21PahG6kcEZNnzthWAYFT9SWNJDdE45Szyb",
  "key12": "3nn6GZew2cNg9fAzdUie1xZD3nc77uN91cewc6cPUBNm8uKf8itK8vAt2MSNMEWpb2knrMsr9JaiNFPc24YHyJaZ",
  "key13": "2kMRQTaN97bGKKsVcYnUg1TmEf3Hb7wGTgwF3ufxcx4oYzLWe2oVSwvSDPHctPtMRLsgjRiUpwCdAUMJooU9Fc5X",
  "key14": "5DRoWaQJkTcujmBGrMVz14Kbo77h4UboPVscp5bchu5z4hLeeocpNDEmnhNUDKd6UtLMwMGSWEJLMTFqpWoy14Va",
  "key15": "hqALEZ2bkdo61kbrA8rUEa2C32nzeGm5UFYum3Sak41mrwRsYMksYvbv4XP23iZknbgHbwBGWtDUZNZAPSAgMzz",
  "key16": "2agAAWwHCkHBBo67gvdJEHYKg9i1T6BGsw47cUHihWPJmm4JiwVMwYkGYNDPNigKUxVnoVek9xzj6xZvDraQ1fJx",
  "key17": "59NfSTBUVX2Y81ELMm5xgAMUQdSpp8MSTjv8eBt6U6LaL89Fd7EAekeyA376VX8e1yQa2BMi4DBn4z9cbZUv8jCa",
  "key18": "5DAyYEYvty8Fu4xqza5tLNRmZZsZtfvXbcqjzPDiN7u1Exph22vrjPXGrgCYa2S5aa5HRm3o39fFuzTLL24f9aeA",
  "key19": "4ZBdYPWcQ1ATPEVtiFawvbEKgyYn4B68gjB42HDB4Ve3sXEQHrXeyoCbpYiEb6TombQctxmBaCinfjvqZ2DvGgKv",
  "key20": "iW42tRDfdNgPRBzr6trULgQvhdSp24ihEqp7GtLyKXcmHK9rtVLkF3dCukJgUtmugXNkxcbzwFDt7SX1B547DPg",
  "key21": "KyTtMFU6MX2pL4TdymYM6T2hjYumTMedvynyQjnpcULh99rbBbAxAdhyAJgGSXLKhRfkUsnfnyKFZx24FjdnwTo",
  "key22": "2bj5nUrJ81UMQCobdS5f9zPQ3mY2YmNhhk5Ygao4dxAju98RzmScFRWufDKTnneGSeZJ2u1fQ4S1fyWhb8AC36yF",
  "key23": "5Ej6tgDRdk2j8NvtK9E9V9abMiAg1u4unXr1fNTYHXhebTDwNwXfz1aFDNXUt4ZWiBMMNka7e8PRizDPJv1TNsnY",
  "key24": "5ZnKx7t1BmxmUkhgtxcFcsT3ZxeqnVhdaYXPXWGo4NjARD4yeDBjrGmfUHmWkWjihPHLY1vwWKb35Jv1F8sK371w",
  "key25": "2dVSAyobh7aAsVudcWkPPPt5smsd9HTcTyqyT1mGdLsEmobMWiLa7GH1sf46dfmfuhUeWr3D8fgNHasvtedx6DBn",
  "key26": "2QJL4tTpzGzf5TQNNpFLytvWVyD5DbQiurX75ze4FTFpt7XLjXwx85F6nBJVtU18u1UiU8n33UjsdeLzEpiNp4N8",
  "key27": "38ZHdUsESb8KUVo11VyNwmSSWa2pkrG7E3uVAVMj7VW6UaLir8hDW232fXu5uZ7xUTsDY79CAJANzTrhaBPcZsHY",
  "key28": "3whgVyGm7A918ft54ZzWhcPEL8RssXDSezU7VKtnzvzUsXPo9hPNDeJdZW57KNx4WgTscFVPXWGsM96TmNPdAssV",
  "key29": "5hsR9dyhd639CD7uniWXgGdUsr9JFT94NDBbkk65y87KzaS2Gz17iEGfkhX5kexfPvps7Dz9dQne4vDCMiptG1vL",
  "key30": "HcfEqE6dWexN1hq2dvc8r1eCrXAgvkE1TiLz8ynFVpTjQHPKSo2oUkeRtnoUdtzu2JW2Bj6fa1GRSbDkc5HBBUx",
  "key31": "5WUorkUCGMaQKX8TiiqVeNp3Fsyzw13oooLaBUbrc5vLRxSuW5rfMqy6CebQaUAHxbBJDpJVzp3pegQb3RMBb86s",
  "key32": "1pyj2aV3G42hdTd4xASxgHTUukjGtL9kZm52rzAvHkYRnr8Xvpb49joNdNauR8EsPfYzZcRmGENMqnH3gHojGZ5",
  "key33": "2ao7oNrY8hJ1o6JuKaum44hBxf6K8e1uCdrHWVDrfodJY7RqY64C8rQgRMNXU38rVex2gnCbtJtDSKih2vmhBDCD",
  "key34": "3oaMYGaPo57isA5qH2zVCQBvUDnLPVbUtQjqzJDthVRdn8VSqa9RF2A921Cx1Coppt6ZhwPhrJbtTXpQxpe9jZF2",
  "key35": "5JviMPb5s8WRd5grqMtnrnL2f6wZBRdPhaa1iSSoN994aB2ihKxcDF5jhgRd1wbsqLUY7vt8nN1TNgQ4TYdsVkrp",
  "key36": "A53zUepGB1m6z6txskNyLkZ8P1rtRNhtMSGxHxSS8UYNVH6mXzqhqGgBiXmNRmB5nQ9ro9wpVz2ChNWaRuWVgUX",
  "key37": "4AV1Eg5mHSHU4dgwcGmTthN98eubS9zLMsVPUUUV22NrXKPZEVKHrWGGDKBhunJcaDi7tuT7zBPHWGxngnbUMuN",
  "key38": "3HgdPgQx8uJL4htHFyFduKNJo5Xrp1VFR2bpNmsjTEBBeq3MgShirbaQnypcbQHPLxAKUPevjW7zpo7RJCbvpgkU",
  "key39": "42BiHfi41jJMe82JxiydvbHkagZMFAKAuBWbJg3jTkfSbHZResXN2uPgaPUgo8UUi8w11dA5iHNEzjMthKWtbBR6",
  "key40": "R1YAAJo3YhyxNQyKaUJhY43o8TrycD65AovFtoBUgi4CCZLQnwwkPYtu692FeBcETeCWitW1FF3TgRQRG9DzbsC",
  "key41": "4Sg9fXY8BL1DcVhTBptQLvdECHopnMcMvM9bvnKN6MsbdPYT8v31dtGMfT5ikwN6Gy679PUTqxj8oQNcjge7sLp4",
  "key42": "2vgFnEQP8nJEwDwVYt6R6G2gEpRrtkUHzjRFKcFRPkkc7TM42anuaUqSgUKs3511JxGKiFn4Z4bxKSJVYxgdX5JC",
  "key43": "3qp2hcdKbCvdt9YP4e2SifXufQwwLFzsoQRMvqKLUrXKLqgZtHS93cT9CSJWh2xShghUbNWhHgyuWdLHW1gNCKK5",
  "key44": "YPdE8DcQjmko6PWjbTdn66DV4z9kxKNfQ8MXo4N99DWvQj2idxZN4LeFNfkE15t48yCZWUFycUAmLXX5UrQvrGS",
  "key45": "kchWCkcsKPZpWXU21RohcvXyNAVVs2n1v5FQkhUCtuzkcEP6LDeFogF6JxUrEwR9FQ9P7s8Wc4dQCDSa94G8Kgj",
  "key46": "2hTE39LzbhwQ4QmKuuTokchHAmWMnHj8LMWbBuK4oonCnSowx3JEFF4EXHWyq3SxoVzW13VeJjq59WZnZmt1mqwG",
  "key47": "3oLo6TJp6h1zVXrHPzMVYB9DSn7HYCX4QGo76MJXrguqpapjvvKU8j5ggYG8wtiXcTCdipBZxbZez18TamMdgF6k",
  "key48": "2ukYqeZR4NefKYGwzByfnrDTgyKCGjzGvmvikZRRX9uiiCzuGTWnGTdPnfQKitnF46tthSUNHC3uC1VkiuErdA5q",
  "key49": "2VtvJpbwr3gKR3RcVGLZQHnJkdNmFE44PQ3LoavNq43GuPVpHdp44wCw6CywKiyfDgjsmnnm6ovoF92JzxUTCGVe"
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
