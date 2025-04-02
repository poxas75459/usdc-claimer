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
    "6xMi6JTc6nU3Gn2nU8WQ5YBVjU8mCqRqPWPyZ379SZZg4QbCWkDvCz1Pi6CPpuWMH2MjVbVpU2YgQzBfJGPmEcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HQ3qm4c5hcxos2x1dFYv44inu6kZ4dnhpTQGvdHh99xK8KexFBPjR8HH99eKHvs5E2FzXUuTzRjco4uZ4Ev5zYt",
  "key1": "63UoGQLTmW3fRy7nCahv6bbdZPCMgzyo4Svu8xSoXzeNGJXqeV6GtCbrKg9mPwwrVcMnp4PBWtDgnj17MAD8QgeF",
  "key2": "4CC56hbBFWG2intbmSRCvYrEvFqLjhY6hfjCmLsz8LjDRcsFFvijDLKpuW25aD8bNU2zpJbapevKizr6yw7bXBxm",
  "key3": "5C1Kc5srjQBv6YTLx3PkvHfdKxe4VFPjmzLixvNKHAXefzfpenWj62P4AbxZqK1saGro51yXcJPsANxeQpjotDpg",
  "key4": "56nBhYtcBwSsajgM8UH15FWftHfFscETqaCsUYoPG4RYAbQrjzcQELqtzJrVfkmhcFvnxc5rqKXWViFBVoo4B19c",
  "key5": "2KCMZVup3k9rnPRFhLhPysV4cogvwf4aU266MfCopQ61efaT7u4QrjHYdD6YZiGEWLa7SwDZKRiqZfr7wN1nzxoV",
  "key6": "226iv9zBW99MypBMFSePQka3JP4Gd7dWqTZHYhwV87Fk3XW6ARTGVi8aCmaybs5TRd9oHHHuLKeEb37wgqj2RPqT",
  "key7": "uLZ47woUK3CryKBkWiyXQcEvC1gphSnP7hSyXcVP6jnfZRkH6m4XDsaDe6ZvWWoaEFj2sY8FR5tZU2EG3K5fcEp",
  "key8": "33TfUjYXUikRUm6iTZeNm1RcBWCyVaMhJCbLMSUsFpScjdJidnPfN5s5P4FgFMMLpaquyRx2nTpcw5LrGDhePPPp",
  "key9": "4siwfFVm9TkXh2FYbJeZjYrLgFAfPcp3Tzh1tr9Cqhfv34wDn8WFcrvcGNFKMWQ5NchJ7BamWFCCQBvMAeFjGUwW",
  "key10": "2x3PqBqqM9NWLsNGAf7wBevaMXw1vpsooGsHntPmnbLPzmPofUwnSpMdmfGcGSnVLPbwvcBRsqokLo6EMDsSyfAt",
  "key11": "5GbayZ3aBb6V8McnfCVL8kuEmgBgo67T3AzUSRhffihz6GbpfpNUiqXJKcfhtxeN7r9NZUGX2av36AnLUuFaHrzw",
  "key12": "3yN1SgDNArZiNhwP41JQuWWz8Wwj1139V3daKqiCJo6V519zAURg3P35ssNYU8d26cnK6TumFxcLwTr7y4CvkBZA",
  "key13": "DQVoQ2TChBgmxbarkXuZwEKhf13HrhHRiw5k3mkQrQWN7aHjm1wjVGkfVAWpV4c9XCipbPn9tRxKAfPRL1o2oXW",
  "key14": "5V29WVCiXtEimmmVWmuT8iftWKbeQdACuhVJzUMVuKsqGR4Q5G3eT4KMTzfCbM23JdYRZbgfVF8VU9CkH4yCVdq4",
  "key15": "Yf5YDb6ZRwZJvRNf5DRmtRywqUS5ajxAXMPA3c2pmgQgdnYP3mCeXNPa4GmoHUCNeuGX8qCT3E6vdkNhJ88Mx8v",
  "key16": "4Rk2Xzny6P3qrxUZhnVZfz96z9RWRKd11sUqL1T8TnGvfCjbwnpPoqyXK1tZTHFHF2XDZiv82ZAvo1umQzj6EPRv",
  "key17": "2ZPVwo8yEZmsEWbvEQTcTgwRs3G4f1eKSR6x3ywoJ3j2ib1Lm7xhHHvbsaenoJWvmSh5X7svhhE6s8xDDSfKzgQW",
  "key18": "3qAsqkNvCkHvkU9eryKgV94Wz9TpByHans7UXJw8D6n1k58jwrvxJ9Cw56mEgFssFLG2n3hePXdAmwXKbCsLcnba",
  "key19": "KuPJ9coDmWZqbhZ6zBmF3q1gbpafR2X7g8Te36hP4EK6qHR4oznF3ANq4BRGEhdz88DVwgZMqYx4krhHbYwTdim",
  "key20": "44kG3DUkN9jSMfyL2H66RqqLtXg1cx3Q1EpEAkn2F7AVHrkDnMPwi7LDdME6nmYMzVKAWdgrSTAhKkiVgALV6XzJ",
  "key21": "YF79LHkiDFaP1W5vE2sh262F3kncYqFFu1SV8j5GeKrp5mZZBnqm3GCDVYKbwujuBQcp8qWQLHZhMMABHDeU1Se",
  "key22": "3dDNfRruR5KeQA3DTxWdPFdPovTahAuZBUadZx96zCnoyLnMtEjSN4S6ouY866PfHXxigj7JPGYwA4r2DnTGkqRn",
  "key23": "4HCb4Z8NLdfdmy29jtjYTQ8TpArvBbNHBEFiLjTmBrpuVfmikaSDQSQuTozgmqYoNm4pTiubdQzkaxcJxBiLcuYH",
  "key24": "3QasrBL46DVkESDG6iubXNL6ZdsSGavfWKucsp4iT3FrVjkhDRBq6ezfxJUPTnYwM6sw9bXqpbaho2NisQ5T5YPo",
  "key25": "3nnh8wGaHo56CMsF48ocaiuPvVydboQXeuuswpGNkymiuAzSASYYpMtcpneMe52KsyuZfpjjx7B3UjFjrv5ma49Z",
  "key26": "i3JhwDu4MB44arYT32gxSYhQUnaipy4emD4xB3bRnbHRK8FpDKRJYPio4rWnrK6sZuGPHmdQMy7Xe5TwFWGhFPM",
  "key27": "2hqZhSShLkazyptH5vPLSuoz2gK1c1XidaxMwgnCaXtsJmCpxwReADtmZNfBH37cRT18BE8Em3jk2obhodRdsPRx",
  "key28": "ntpzEEkVdjiPrjUAHoKb7RmHdupGDLPYzxHxkqf8kYHRF1cKLTe8PppbKBJF4bpSb9EkmCPck9ZRXtPGjhUdjdp",
  "key29": "wfZFEY2bk9oXyc8uRr84fJdCL4iw4yezYdVSXYTStkX9NwncCfk8rSNdDE3ReaSb8rerrMaWN927VJfsLNTd4WH",
  "key30": "VTFm13jqiWvyQiq4BnZfZPWYUHg2FpQgL568nPPXcbgs9QHu2MdDAyaYZ46G1ydxyRsgs5G3qkoEqGzgeK31TrJ",
  "key31": "3KHii4hbunarvp9QziJB6bS9s8Q9MzB87geQGxwspmY93652ygBYMEpgG7MyXaB88EhqZLib5rznr3KxGkFSNiX4",
  "key32": "56uCYG1wyu2u4WCGgZALdtqENeqgoYuvLnR5j3jtzzDkrxV1L4fhtUeXRNZ2rYLKMDZPbgY1RLigJ4wt4WXrvD1n",
  "key33": "5K5M9GA2hDURj4v9RAKe5oovgTxfXpvMYe5zGfdFxP513pCUh39AALCm4GXiyDJCgJ1HWioB1itAkBEHqyxLDEoJ",
  "key34": "5SRpFo7xMuFNkKryR7sN58BDVm8qV1YbpLVegnwd8ZPNhMHxgGJtnJWZyCcckZjWwrCgeJXM2AoumLfEwYcP6uz2",
  "key35": "3qmr1zyuZ61DejcQ6ZY9pszKdgE2y2gkqREKebR12RnisWji2ckNhuPfR6shcGeox4V2bEdHqLi8orMdPmpx4ZBC",
  "key36": "3e6pBQzKzn4caUJnCzNrSEuGjzXnoyuVNBPCDra8eRRV7UPwsvoAfEsPRUATwvEWAtNpe78meTpTDiw6VeDjzDWp",
  "key37": "4Yoaeyc7oByV7EQ8ppwdU9MW2ppkSbjdiEVFRgymUhv1i6R6RGSUspu5PmKfkN489GBE9aFJUMoyu697HmqqojEB",
  "key38": "2CDNEwjbcUPeTBXQJAtXNzt1tGhJdj6Cxz8KiwYMPjfL95XDfUBeBYhgPsi1LC3Z4wstHm6fC89EZSpCpbpj7e4V",
  "key39": "PSYefLEFLc53qk6ihuKxie6cBByBFuV73VR9x5CPeuHLVJE9N4NcjjMvNLNSHZC6mbqH56BXf3K2gV88WK2PgJm",
  "key40": "Qr3NFTHd7k2EMUEwYRHPwnzGkKgqPEbjEWFeEs8AQFD6mQzArJnWaLFL9ryKHhk7T8KZPcxq6L2RChC8mAK1buE",
  "key41": "3UF1sdFyNKUaRVkwadEWsjXBcTxo2Xc6MP22uojFLV7tSRQbcBTGDUqqhh89qkFac3qK9zxMcEq8eczs6a2ogsBm",
  "key42": "5b1pAMw2SGs4qzexJAdsRcNsochA27fG2nrNtphv7DSigH2KPmMFmGosqQA2Yma2up1TXz7NvQCVJjkpthNg6EQ",
  "key43": "4H3TzzfciXnUaBRynRtJbALevMeRQGTgNvK17xdd2EGnGFJpCsCRhiCPiYc7PzYQeT22Bj5weYZPv6k7grSickGa",
  "key44": "2wc9CcwSW7xYVygowqkNxWkdbF5j4Bxw7SGoeiahXoXUQDLi9KC1We9aeNa6moGdPMBhE7WYjbbhgVymzzWXgZHe",
  "key45": "4Mb1z6mR7aLSx2FGGoWimZJPQHCEJKFXXcnSwePw8fiWE1SLNpzhuWUhEAgbvWEVsrbgAuaJXrgFFSJV8S9nQzL7",
  "key46": "3csfcPERSzM9GAMg76agxzvZdbsfh8jgriURfQEmhi647PRg8BQVVPgdDQh6padGJD9uBbwcEkpkHmPo3h5hj2ii"
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
