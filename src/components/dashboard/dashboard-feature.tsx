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
    "5Y22SiJxuy6j59b1BydaGFb54z5636jDfdE4iST48NBgVq8jKXd3jcn8Ldi1YYmpMZWtEMVgc5XvyaGyfi1ycdRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PfXjhcnerPhobq5wRVjSvyVe9R4xeb6TZoLJZ72G4mK6tQDqnFKaWA1u5JgagLvDDLU2UxJAfemZgsZE4ahXrnV",
  "key1": "2zjACj7BfzXdjNfWJfVP348Fow5bSyN2BkcyJFb53oHT9SaAKMyrcrZMD5FnEA2Ry8t3xnpBnJjK8aN4tv1oSNY2",
  "key2": "4fwByKNT1RGTPk6XCxHewrxFXZi4UjqR5CnnC6HeFHQ42DbtgA8GJW9FxvPty1a5Rca2mdZR1h7D5ojDNBVsr25x",
  "key3": "5yXQjbAXFGWmwB38E7xdUTaK8jSK6SaUXN2JEhgy5Cbxj1vtioGicqmJXxgRkaSyXFGe9REbyQ79wCTH6yCFGTD7",
  "key4": "2RaXSvptSv7e3RiLJg7KByWEjK75JVrhPFFM1MbbbTo4jrSSSijhTQUyYSRuU1eTk9fpKEMiUEwMfyz9a2aCmz8n",
  "key5": "3XgTMgjCR2BaoUocjt4YcJDDv3aMVx6X1fGiaeKt65zd8GmqMpxTvGioYRvmdtH7txrRBZBcQ8vYh9s3uj9crdfL",
  "key6": "33ATLnD854UGuepKkAeqDkWrGnc2G9BrhPyScDPNkoYbmLRnWSumuZqAUNdEqpZLVjVH41c74YoqdrSiJggSU1aK",
  "key7": "4mpWZFSNsjCdMK52zkYonxXF375URvkdMFfKGBLqxdTtH7pM7tyXBRUnHGNK96FNdGphK1ib1fGWVnXaa8WmFy7L",
  "key8": "5zFQvDcRQy4bzC9ZpZ4J3DWYNUpDxA16u1F5xyigqzrWBPDvUNjGLZ2uH3nyceE5WoJCLqatjKdeHeiPQDe8v8qi",
  "key9": "nr2oJPECsyoLEhJQq4E2Ar6aEf2V1uUkRjYYbwQDipAaSs4cgCGsPt223nCsSW1Qb66bjPaUtH9YUSZ8sNspdzk",
  "key10": "3qetRqUKQiFh2KUMDi3MGTQ7WfsjwgQDRJC5NQNypZGQwwUpeR4GTzeLnmWeA36HZfbWm9zxRQ568x94oS936Fz4",
  "key11": "3Xn4UaA4HPYK8Emfi3oKczHVNt36gDM22XEEjH6CWW8KhvFkGJ8RCqWnXLDsPt3VHJyqGhcfbuvmHo6YrgVJhsiY",
  "key12": "4n5nKpNhQc7q4TQmagiWC9UG6skz6TeEPSuLjXqpaq7gxakDPbLb1LeWtG7hkSUNHjJyrtr5mmtQNWVuyhcMEaEt",
  "key13": "eHuvX9evS5BdHmrhQnamjXkHpRkED8jaicdKC2hXGGwUqegvP4xQYzqF1oscVtsJMaCKMngPFjb9fWfAQEwq5TG",
  "key14": "5XUNoXNDBu4JgCd1EnYYPJ8iFXwBZ9huaAWw8vg25jkG2RCiB35nUn1ugJjdYbwChyiDG2X5cNdCCT8NZpzWiZLF",
  "key15": "3fSHsx5kfcNaHRNz4QBBu9BVXyRbsVoQV9jHXW49Hqqbnk2VmvYdd1FYVPVJ5iD1fKjhmxF2h5QZQ6ToXZoARsqA",
  "key16": "3wcPZ2UWB8FVBVir5CmtftgMtwPo881oQ23j9LJG46PxPnPfY2YixmXLagg6NdLmNfuq67QmANaWFp5CwaofRU7Z",
  "key17": "42TXjGT2r2PYu4Y7VCnu8ma8JoHps9Q9XbBsBw2TZzpmv7vmKtLrbXibfLLKy5Pw2S5f4W4DsmtFeNznJ2ymcvqo",
  "key18": "5WUhPbqAG5urmTGvFgG9Cny1ZY8Z6zt3mVuziFnBu3qgbQy95fQy5NhzjLBMAEaTYK7bzcRGoj5V6VC456zvELJj",
  "key19": "5LFkTfnExgSFYiKzWyMqmZz1uenJeCEfyr2sdBN4UaoTEf7U11Hqo4LNWmoW8Eb6b6hyGYEXbxhjrMB8uxG4awGE",
  "key20": "7Vs24DmHnc7yy87f44bGjd6FMJKKsrvKNjXRt7jXUKws4WsKphw9oUAHthA8TAhGeR5snXUjDxejPVBBm9UimuD",
  "key21": "5DQCiGCHd7foGmMe2XhUraf5XdCBV6qD1z1EYy14ya1hEqFSH5pdAwB5qXV4nPPbc6nbCVwHiCREeKQ4KP4odaxa",
  "key22": "21cvrGr25DfE7KRxFNSYiVfjDhCVLQFEwwEwwnWo7UCBfzZH2p7L73uQGnmzLexc936wpXQL668zA3MsUCdfX3kD",
  "key23": "2SFBopSJ5nnJc24yFkdBwgsZ4wecCmTpTztmFxnvhcKMf9NPzb42BMBbhQfJHKB7rqRpsAMdEXSsqnBQHHC4heiA",
  "key24": "4qq6YiFzTtdx3cqyNhy51fPg2DwXnD2TWtYbhbGpN7eho4hNwJNDwJ8hV1Ao2MXdUzgqHPAxicW3pCJo1LtDjFB9",
  "key25": "G8k6USzHK9EyeR88miif9BovrriFShHoRTjXj9PiwrEyHNBfFwZP7weXB4wbkdjq6z3ecb1HThuzmuH5p8Ciiej",
  "key26": "2GraiToMGcp5izB4KAgbFCnq8h5yvZWUnGzRYY64DR7FBdWGvCc1oxKLn79mn8AKCALrbQMyN1WPxbPKV1zvjZTw",
  "key27": "5d2Y9YQxuut9Fsix5pUVBXDQ5X5ViNf754F2tekgJP67acCPJkud5xnSRE4iUrXauwakFQkFn28cMvxFSxPwRGtW",
  "key28": "2bPu82iyiyZ4V5sxZXs4NLNKcrG8SyFxRmEEgnGpocDx3eeevd3xURpzkWTHV8De8v9Jr34xPDFhXXPGJqAaq9eV",
  "key29": "2Des2fiKDS2e1ihM4cGAqMq9hAHJaF8fjtrVMFyyPZTtSi9QecPPZpgimjg7gzU86G9QbRAMpys62gMrKyaR2YeX",
  "key30": "CUpfsjKK62CrCrZoLUGmJtakGsPhMBJF8WvbnDuYHpWG8S6xTcsUxfUfNxPy7GHgmGgzBAhtstVcAyjA3jsegTZ",
  "key31": "9YvNnXTR6Vhvx64vC7xxbEFhd6MkQwxE96mGnpFShtnSXWvmbFtsnXVThLY1Ni4E8Jbb88sRX9jUZM9wopA6Jhu",
  "key32": "3ciVawW44JFNB5BvrEKs9vdFzfByNH5B3T9PKSrtJR6ar5KzkzXnNrrgS3oHwuWKxhEFHNyPELc3LoSwXcQTYDME",
  "key33": "48gBrP7Mv25TJtBTDehWnhsLeQvAuTRmsfkvcFdZsioCpTTNPnMYiKbUNjfpsfP71wK2yEAWDhytKjTJJ7MPrNeM",
  "key34": "2v882wd2ezdfbQ42kfPZStXeXZtLHHkqPsomsdZwFC2neyFe9kP3o1raoqAiCx9dqW1F1YxE5X3pvUrLcZzLjVwa",
  "key35": "4t354JfksgLwryRLatrWeHFn4k3JmpwokmwwpiDH6CM2oBTm1wvfukUCKyH9cJnMwVrTeTRvzbWGGWmPUxUWLx2C",
  "key36": "2Trhxf2oNraB4sin8uHhdAs7zdkxUqCquPX63SwEsGNatUPPAPvnjBQLxh3YLezfA8d2Ub34cEzyHweuxwNec86H",
  "key37": "6tL8FWmonM3SPRBTVvadDadrLK1bn4efP2US2hocSvE8GsX8fzvij3tWjRor1erqMnSmnfGwWLKR8rUytzVidhf",
  "key38": "2jeAzSUhHisGtAxu9pshjxwXAD3xBDC8L4EnGCtqjNWK7kEsdoZrPcenZDKz7W89stuuxgMR58hcCfPPEFx7aegf",
  "key39": "3RhJWt5MC9CNEnJSAutCwPKcJWBhDjx5AXiYwCZfcJsscwR4z5MPf8zBeGE9BXgEr4ksAdmvFMpZdoTQgWrt1hSK",
  "key40": "2DrWj4b43Bemqn6rTBE7AmzZTNVWPFNN9qKJKu4F9RxcV1tAgRKPAzoCEWL1s88rN1Y81aqRsmHyZnZUJYbwSPjT",
  "key41": "4SfQsym9c6ruPYKBPY9Uq4pVTHL92dnKBLzqeC8cNxgeH9ASVWtEEiRFc2DXDgp3NsHof7aazH6tvTwR76d4j4N6",
  "key42": "5gBSF2evWCjHDKNKb22mVSDGK14b59jEtDAuPfu7eCBj7Rw6GM8PngQ8WREk5hY81gVjjrBCHF8L8w1LmHEgHcnT"
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
