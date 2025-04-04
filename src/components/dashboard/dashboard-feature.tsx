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
    "33Ht3zhQxm1z4YctCSb11V9oFqgKkcAJADG2qtCf8MKC91yQJdg6pZ5Vx2X2NTsnir4eoeQPQ5J2ijpFhSSaGyPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Phab6eiYVixX3r47USUrPo97rrABQYzcE2ASYKrxTumAdB6s9eCkyNdejRMbRsGsy2mY91st9MPpZDzbcnPorVM",
  "key1": "24bBMxydcVw9kVXSxUJtm6AAHizFvV9FU7UxcyMiF6EkGCuJMTNtpekEyhJ4dZKNE1K7eNKExPdpTaZjG7HUBBXg",
  "key2": "3dyn59sTYVGazvRGQWzCeW9ex8xPaR2JZywpj42XJAJXS8yLEhVZtogtmfv9L3VMt5T88Y91hvNYCwzSBjLzt3Km",
  "key3": "2vJrj7GGFQwwLVJLE5NQwW6aUAXTRuxmPEm4GqsWgHVeYxb6dnGiLuJZWjhManvpySiT7WBPKhWofRkyRtmhGtPe",
  "key4": "86VFzHAEr1SNGwDFUZwQudSHa5DDFGQQ5BD6EU5mWbt9PKeG9J1qfAWs1YKcYVewvpm9Ci4M5kApRhshK4D8n1N",
  "key5": "2cXh6xLGQWoRygrGntaPToJVN5GtboSzinMaf8UFZRgpZJcqac2NdNx9zuN5uRrUbXGsByfwU1KVNX6PQw8BxLaE",
  "key6": "4gJ2Xv5y4VoB1YFiP53RWSoWt9pGQcM3LQVhdgyyWkaTjzE4RkGKUmKb1ZZpD7XLN3yL1wYVhwYy9L8vHm11sKFx",
  "key7": "oQTgYkqGmNt4awve7Y4avZ5BBj7j8BpdR98Rad3gCbUht5yuaVJB4yftH1M5WGNyfqxC6Ejz37rkiHNH79kBLRr",
  "key8": "4guaMD9FtuECeNcpedyVBWxuyZH3x3zoLt1hbaqc4QBHPHyqeeRWeRE9toNXXt1nHC69fFiB6cuNrmV3n2LLehgK",
  "key9": "4qFWJWSPeFXhHja8RYxQ4dZbRtKhnQ3kUepjV4Kna3TRwZ54zBDuWY164C3QafVPQ8sbBASu2GXbgnWCcNviidjm",
  "key10": "2rCfjsDuWGbbq4rb7XXYQmQWTUxGfw5djETsHjv1kWeSNR4z57vHqWr1FhvBVd7SSKaxrU1km65GfnTSNQGd1sHZ",
  "key11": "319wMvWYtUV9q7AYsJGkfMG2ouwEB9ekYaJCh9r91xnGs3xhUfCsZP5ewKGU2HTREdCpg4cpBiswvPmor46oLhXm",
  "key12": "2fezy1BxMSMkee472mdUBNn9cQSXDVbtQaBKfRRyNgPr71SEENcby2yJTm23iUDiPatQaySD8XdZ8UXMLSZ6QDAJ",
  "key13": "66KN4qxg1LZEwJwEfFE3z2cPhn45BfHiZ1EZCB6HGNXjmTsnN9biZUAADZpS8b3VDWDDnLQ1h7NFVDTrXtbsuTDA",
  "key14": "bi2TRjSiiUY1PN67nj91maEM3Dka58xHtrgow2nomt4xFu1spEgX23wXsRxgJSC6wSHFC5htA6SeSqeptNWTQnZ",
  "key15": "4jN16k76Gc7owvU88vqZoMUt3WcPJEVdYsg5cupQWTUb2zY51nYxSa763WWVpdew55b7QahUGAuWwoJoA9GJdjXZ",
  "key16": "2VSP9jfbTdwx9L8ztiQ5sxgeEGyb3utAfHJq95CdQ2BNi1NpyDg5BcRZVpjDMSm8LpTwVtnW6X4kGpx3Dopvvqze",
  "key17": "3gWKkcHzyeHKPBDXLvZFVvwkx2SpPMP5nWH48XFSyrUEm5kFcR5CxyzJtQXm8s1ukNwbMV6keuUEBQXtej4krY7H",
  "key18": "4MZ3SdUfqoWZU5ZPq35oN2cuRuExGkPqXxjQwMmfMyrqM9XosAeoVm9whL5PX7EVK6Z7riCJn9q7tVhHUjCQErZZ",
  "key19": "2anQqquYwnBhareoXoDHBy3dHQbAMSc3RDtBYVp9m8msM7wXGLWEDLTNKDxsETecpWLp1TJR4ZADUhK66Q85H5sX",
  "key20": "5uVwsGzMiD6Nb1bR66Li1bXmypPm4ZcJ49MrXx7ijiZRhig4LuhgmWgxGhrVHBTmbovgVwdmbEWGiFqFnpJYFQBA",
  "key21": "zAaUP9gVUK9KSyrDg4AzzQKJwui1W3MT1j4Jf7UAj9wWMTjn2H4WiWSF9X3YqLYD7bzaG9FV4V1zogcMhncDH2n",
  "key22": "5GbC1CyxTEiRZuF33xPgeR8WXN89MHMEvLWpWnLt7YKbF81aN84gaP8rMnCj55w4kCy8N4R42Z3jaBv9c8yGKLpH",
  "key23": "5BEz7BnZ4AEniKpJmME54qyJxRscNdZ5eRQsHBFPSwLywnb8Z6P9XHgDzSczRzKXP3zCJfhvEifRMgnV8U8ZHGDr",
  "key24": "2dMdpPXB8QYNibnhbHvLmN63RiPScsDuHr2DrRz4r1HzCaRz9AYbegF4SpMhhJeNYmG4Hoqx4H9CkWsN2fq4NZq1",
  "key25": "5c17WHbJvUNZYrUhx3fzfxKNDZ7MupZJ4EkyW5FtuD2VuhbvB49iNmghhtgwnKS18t6wyzLGCt9FH4GJvR24PJ4v",
  "key26": "161kx1Zi3YBZ2G6NfVMrQ3ZUXJqpufq5BPg9nsXNRNUA64SLt18HpW4eETpnJeBXKgezABaYkunwkc7AoBw6WFx",
  "key27": "4q8ueecUkZvTJyLhqhEvX5pGfsnXHAcDFJAUg691t8RynEmdzDndL8F8jCqrqDZjxXF8KXAbQRV9WMeXFQuXs8zW",
  "key28": "4wPRDEKMEtCjXTijVrHLE5mSBrQpFLLcKBVHYxN4aiKcniZiDarAqcXqfqLLttyiNVrtAi7kqDsauUcccEG57eZa",
  "key29": "53Anf3VasQkDmqBUnMGYtfG9GaFsDcAjeBqsJiYpgRgdqzBuT3vcxES4deMutPUm943QhetdgRJDPz6nZ8muAear",
  "key30": "4KqdqNiGciAw2PZdi538TMgAHiFxuavoWxKNMdNteiUJbzuyNpf1jyqvXRRuhUNnvaRfDu2JT875eEBop89yEA5x",
  "key31": "51cHst3L6wTgUrkoFeL94KGPjESYfi67dzd1HSRjAkjY1JGeGgc3BLGzwKrT8FbVi1Gv5n7q6hQHpX16vTscjXkv",
  "key32": "2grnbEoHPbVKttJb38nS215DmwKA1PLyrcsw7UwBCpDzgyPqHSPTFEudB3qWypHwQtNZrN58AT7jpnfA9r5ErtZL",
  "key33": "4g8M6Rz8PVQZsqBoRiRKM3fMHq9GJnUraLBrtCj2RHHqbwsL2bDodNvndpzvb2iWL2TQtgNt99p6P2e9ncrefoaT",
  "key34": "54SpCcFcRKTDFAKT9Pa72oCDKdjv2yHQF6Y6CwijTPG3Hy8TJAn1K8n3otsp5G1U7k9w7ZshTuXhsg4fe6gVGgbr",
  "key35": "3CEsJMPEbPYkDEVwoieN8r3CrRhZinXyc5Jab4AFtT95b1RFAGU8atCr6c7tZggeGqiQMghyiJFGNAw7TxuxGsuc",
  "key36": "5YmDNCTNwGkqwFqA9yqfjd8UEwJD28NwCTL1edLh5yRCwn6UeWddasupKjDeiPSBCPmREZDjcJTKM8MwaZC1H3ew",
  "key37": "4RcHmiTaTJhx4yKjEQaK9ziFEtiAV8PtMf7gJ2GHjX1mge51Zr6xaJmqUrJhpC8a6Af4ZsN2pdHGVjhrU6RAEUqe",
  "key38": "4WENYP1GsXm7cFVA299eVfHLBFRHT7cptp6YSckSu4MchaDX7FsLab7Rm6itrEmFrm6EkVGtQCB8YRMGY8tiDBL2",
  "key39": "4yjkNcqrGRkGXRvamUTvR74X54STGD9LrD8MKzWxqcB24Nhaa9UBn5KcPC8KSzzjMr8er1RCDbLanrUTMg5bxa7k",
  "key40": "3vA5rXVM276rScQoRuqg84k9ELqBfYeLKpe4ciUgDL1cwrmUrzVKSPcvWqmoXnzvmm7DeMZxVncXumYuPKvygPXi"
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
