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
    "u9oDAhbSHKCiTmVmx6gjEfmHkX8xgY53Ck6UnACByLo4uGqtWt13BsWpypYkFSQo5MwVhF6oji9fdjdwYEGTZJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTf71X15bcUoToQhxMnqXfVHuSA4zwJeLd5xxGLPPSjEeV9iZMHpLdidjKXTHQrHvu1aR33CMKA7LPnx8n4kLhy",
  "key1": "4kQSjBc8r79Q58TvtmpJMXKngY3irBk2a2EHkTeESEEsQdYa2bQv7sF4yDiZi6irtcmHpdHA6qDk6yKuoqbXHbgZ",
  "key2": "4gDnGqff4dig7kXTzv6NHDaEpKkjxbEWGkMd7GQjyXFHHxyNPJJ2j5zPnxdDoYG8tqywMpXM868iGJvXmRLttR3t",
  "key3": "2CrgbiyGt5Aj5LbT4wAuLuMmrCdzKZTZUsxacimhj6bY8igWqgbca4MfyE1bF74wosnyQ1XemSdgibbL62ChD8tQ",
  "key4": "54FaxisLgjY1Gg4SxwLH5KJGVLRnV8uwJzM8mqsATGYybe4uLYmnrd6v4HzjkR7ZAS6FjJVERb8LSpcFtJiNuPY8",
  "key5": "38JLZkteEDpv2WE7tXMeFVGf1NH5sv9PrCPi9sTEHs44nCW8itL9N39WkwT86mLbyQZbtdbC4t3sMJ4YDREomi3V",
  "key6": "5PvHCVPDJGxnRftKfttHWVJGLJNSVCrqaheD98tQNvaVszen9m17vfksMzFVMszgafqCN8NE63s18dDR1pnND95j",
  "key7": "5WBUwwGu4Gb11qmKFco2w3F5qjJ31FLeTp3xBYbXmQQB8NhV5uzxAwX6onGTVcyGiGuyGpYpoqTFRPMAU6YuqJ9S",
  "key8": "65x3eucGMLkgifWQDsQ5N2QgmXVqsK8Dd8ruxaLdhFwCndyMzv8wCKsV2z5Td6A6QXreHbaXRFW4rcbEsLqd2uZz",
  "key9": "4JJ6LWQxzBrjcezAobGkwZfv4otKLPAUFhRdGxezfhDVUGUsKTGEj25s2DC6FvL3ARJ9SVg5BTA4sjteaVLw4AcB",
  "key10": "2PXSAxEak6vfUEQ7b9hggwzsgZdyQxjwBfrMeSxnAytXpgVSQjPUL9J9QrZdXTZtXNzntdtmAcJ6KAULdSotndcM",
  "key11": "3q1tXCZT51KSceCEPtBn7XRHUSJxipxUq6fWHcSXUCqZFiA4vtEH8qwG3JYvy6FVMSeee9Zjo4MdQGuX1kRZ2jut",
  "key12": "2azuWAbSa3yCj1uNSb6WKWDDgD6gTyoWimSpjsefc6sjZBoojunpL1tMuUT4gc6x1GUCvAg5TR2LdFUNPrNphuAy",
  "key13": "3xxXjafugxQzuFueV1xLoqmNhbikPrL49QaU37DrD1jdN1PcQCYCDwHQvXfF88F78XECDCxxPi6gWtEQYnr8zTAh",
  "key14": "21yb4szNRC7zo6hHnUpdrDXDYSdvpnE9L2ysxtauwDtEuPQ2dPiYebDHBjGsN6q2wBgP5kfVBa9ME3LbLjPM2joL",
  "key15": "aPKPS66yabBGSRc7JHVBzcPoV2CSNVDG6xHpp2SjXgqLpebCuhnZvVcTU4ALQsPgHXpP3imZRHiNt5gwvrrHBzz",
  "key16": "2MdGVh7kz3XAf5K12DHruUKfVR23U4VqzpWxkrHBwhfMZzASaj27BHW1cmKcfa3nAZxAVL65PLeWDqEDJbm5DwUm",
  "key17": "m5g7fXfwUaLSBoMkfsJYWDrELoG9d1X8Fk6u9ZvzzPpew7JkDpRjKBy11dQsPF1y2c6rthDcJjW43agGo3dfmfm",
  "key18": "jnNPt1yAcV2gL3XTi46d4rL9m9SwNN9phpP8vT7d9wi1vi9MxHFuk8HHaLdsyYNsT4M9xakxCaEw342fdJEQ4k8",
  "key19": "3W8dT2GFNVHfg27GQ8qDHTN2KSSfn4fXtzU759KwTs1yxgLVbMXH6B4aMZU9XbRXBCj7bxTi7eK4m3dDAfFBBoS6",
  "key20": "2u8FEySeeoxr86wy6MHeSf2gRqnjFVRiiBfCBG9FiGmTCmArbwiG5pZ4SFHmQN3SPiM7Ymv85wMaEd5fAFJULFj9",
  "key21": "5iFPUbn49yP2Y1nCHsehXqgvEr32UDJdoGv3j2RccwL7YaSor4gd1eNs9kiRHqNti7vP8MKUEvKUdFS8m1e883Kg",
  "key22": "53ZWi2RacnFk4w5HDkGjtCuPuPA74B4hFAFXoitNX7iWQxwrUChweiMegQKZmdNbTv1uLLGJ49GiCP1mnAcxFmfJ",
  "key23": "4bfnoBsqtZfrHz55GuKu4eFMyBGBh8F1HKmo4akxBNX7mhdohJfTiXKrqJyYsiwk8FeX4sK3xhcuZWmamjNGfbna",
  "key24": "isqS58WCjNNGp5tXKWqvqce9DeWtFTLmuiy6oAJ5rNsRUhxtyj5Q1nWR9zJ3H4na21LTLyFHajDq4ZqziuxNFgA",
  "key25": "erQLKrrsKTvLJdB4ZgfNtWA2SzG7ZbgpycUJcpguuCov33Y67JbKhSd7HXz7cTBQPqLcD9q1JUKunJVZZPoHi6s",
  "key26": "Yxpd6Wu7K8QAaw71Gnawr31aoKfK1vyoosSRFpLZgpeAbXFTBZaTz2L1ubVxRCpgBSSGgbNueUVn1diqh2z2BH4",
  "key27": "496xeS739u2rbcVeeNP6pfgx8wew3ySiU3sVznT6f1CH6FzneL5qq1b2Gy9Veg6Tq15zior5yaH5Avsz6zAabv2",
  "key28": "66ps1S2s6sLBEwYKghH1Z7qNNBhZiktuhkfGpfMK2mPxAUnoXMz5qMVMAGitvvm9YG24GyWduEtqN4Uh4Bcc9QAF",
  "key29": "5LrWqtqUnVYA2LC3wLhBN3ZjsodEeGhnvqMRCdK5rp4JQHm6p538Rfwi9b3AHqLbT7Q6woUFHukREx8SL9G4czA8",
  "key30": "2fTbAVEQCbSrUU47ZWvTLVrfGLX1MesZvo6JW85dVAM4ZeGTwCPtvE3EDtBzRUHCjmgyXCmL75So63vaABSvvk2p",
  "key31": "2VSscbNSCbJf9cqTr1SLh9SYwRdGY93FjQikhMX7fajxfMawg62nreffvgpw7HtYVPBVm6BAhxdefpkbuZMSuxpL",
  "key32": "ZNbm95HWbYTJEHysrFZo8soeDsFLCGpKGGC8P7XNv8TEWNhxebt9Fbo35pCji7tksRihUVZ42e1KGUer1Rq5gkb",
  "key33": "2uC8Wyb7erYgQfMJTSbPQ9FcxcLxHy4gJjEHhd4i2knzZxmKXpfMi7d3jqsjgatkdz3EoeGzrDQNGKKbGuZ4R4JP",
  "key34": "oxFWSNTLLbz67swvh8MguK9w4atYRMmz9jUuRVhtgxXG1Gxd59UYpRdSamtagZVXtmZrDbADDet3nikqMv7NYn2",
  "key35": "5q2QZmPYdKkwwKB7xJz4sQdq1xitvMXESvzKqqdoQa1fcYgiZ77bTdiZYNZkH7brs6PNGqkcM5xQf5Ab57uW8gWp",
  "key36": "57Ny1uQcRMNwMzBJFi3B1FDVV3aAZAm4YX7nNATK8mc3ZZJEKqKY7KuYGfJVwzwcjioRgZWMeEom9HWz5vbEfj2E",
  "key37": "2pbzgBG5QBCkvF7cL9qRU7pnUvgFwtDqSagEK9vYSKLT1NLe8S1FA1MbQ7WEvJuvcH2RzrfUK15FXNj3ZbVz92rv",
  "key38": "5nhmniugET3H15VDPyNwgnZmREn6ezH9M4HmMMWu15oZtM2rhZke2urS1ts37pMiUHeNmtC9cZRSTCxSEJWsyLLK",
  "key39": "2UqxkUmMJtD2ts9EuFGZZsdUGaxhRJRPtmp8UZT2sCtCTniyARE5Riaj3DGyCnz3EsDV82rTjJDxo72Pk5nxe2Ss",
  "key40": "5YyyFhiUnh5LUw22QKSmnaQhr4ffUnFX2HnTqrvCWbq7VuypStHLTM6HaURSUthqnuFmiQYoAmdLKtxCDzD7CGh5",
  "key41": "RAtYr3SNyhKVuv4oJHRgokVSpy39qyBT6GzbcWcb4ETZH8MrNmFLXzQUyKUiXDwMvo6X87uo8XNfEb6hL3xLWDd",
  "key42": "5QUQwep36zojEqWKbwXSJwj4ifc7iQrGuwL4rrk82G4iryUQTP2XnQ79fytGLeWqsttr9zzAoRXL2XWv9T3sBghY",
  "key43": "47ishwBG7hPeAMdq5pLkb9vw9yfcMfAgYFXs3toATR3Wt7NXwSvY87rSZ1Vzt3VWpELAykoUyJsoovkkJtFZQ1p2",
  "key44": "pnPG5fe1VhzfcxkhczUsXaSAUAVYEEDc9dYxshXAoENZV6M7PJVx5VcEAyqoZmft85sAyiAK346JgwrAdaqyLeD",
  "key45": "2zCWtwrMVpH8LReBQao4s4d4p9q3JbmSRmSoaFo1MWCY6juhztWAA8oFaEG8QHfbkJPXdvwytca1S4Tin8ak2vQH",
  "key46": "4MFk9oFuPbSKeiukW3obh8o9zzLGF5RgndeUcBHfv9QTSNFy2Da1mqzAyoA92AvEWR9pj85j517sXjKysmWJPevE",
  "key47": "4Eie57FFNo3Cb3akGA1gEpLSoFvk9hJMTDBJ6LpD5kTEmYgUT5nGqbr4rsiL9P5G8tsNR4Zq7pjJM5y5zB5tDPaV"
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
