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
    "4xEVMEiqYoc2x9f8pv9ZW4F9GGMHRCzFpZPDrZAVaFmEyL16UNh2Lb8ZrJ45BF8YL3bujxEJrEBdjSpam9fR6eMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "534UiazzqryvGDrQDR4fFhJjEnSLRXebyeB7SE1YHgxwJYHLxYMEsHsDKxvivCpYrAVpRDV3pwkpwRHqScKZnhgQ",
  "key1": "657JpqDf57QPoype7dctjGNETXUdavEGYzPq9Qa2DgzLi5XnNQTwaTT1dw7s5TQQ4NDsjXs6HmTuJ8z7gHACaeGd",
  "key2": "4NcqV7YWL1r9QTaPFCSqRBJBUXwQ6ZTLCMuasWaKXfHUnksxqM7XSsrV3aAcVCQPwnZ5zysYyqwoc4mCFW9xzvu5",
  "key3": "63bewX114VrVAaq82n6zteci7WByRW2e99yNiNjQzGe7mieG7A5tBR9ZwmobFA3sJgHR3rgN5DYzMNyH6ytkGDrU",
  "key4": "5ugGxUscz6uCnDnt3vEheQJ4bqnoK9kXmj5GTNeSPP5gVrJssm2WZ1PkyYyipGUyKaxqDXn6Rsf7spXULzxcxarx",
  "key5": "4jxCEcu7Jui5NFQxYNkDgAqz52apTwxPmG3FXeBCFkDhE7UKouZq9vsTjB5Yvn3pnr4unPxQe4kUzxDmHM8J18pY",
  "key6": "5qHRpKFmwEEBHXwEhKWLLULDLqVHUq22v3vTjmtNzg8jjmCBpEvphoNocV1XfZFHjDaRHcX1DoWtHR4VySxYJF3o",
  "key7": "ampAoJCbd46YXdb8G3GJWZow2dCzfZsRb4ystpGSRNMXExcyB6pUEXKhTfx5tMX2DXgYCcBsXGcoWSNxVVrD4hv",
  "key8": "uXfK46V1VuY2FBvyQRGXDpJ6heeuVfypydUuEPtam37wyo6Kv5Ls7pBhKj2amMHRnJ3sg4Y132wKRCdhDsoQp9F",
  "key9": "tbxXKbmTnRgdgNiFt1pSwxyFWQ2aCqRDwPA6EMBUDByzFv3YycXyTP19jEN2iVXmvzCAnsZSDLc9v6ThJKhguZM",
  "key10": "4AuLj4XWVYpL3AvYWhjU51i3ZYyC5VkD6AqvYRBfjhQT8dQrGRw1UoEYgy3vEGiZV3wq1WDRUkWK2MLk5PewUSLb",
  "key11": "3iBbr1RoGLfjVTPexnCPxJRJTiPTiu5JQgxXFbtj5HATttnuZxiEJdx8769eaL8VRG9aPeFsYEUhyZFVAQsxn4r6",
  "key12": "4H35sepbqJkqDEabNHU69Sn56jPsGiZce6Q4WqZosiiYr6zdHdtSrbJKvKVbKgHoivxBFs39L9GYt3pPAQgWxanz",
  "key13": "MNyJBeWuZYhy2KJ3PKhdprhudMkwQgYzoVPFSZn8TsDWh44YiwMxGaD2tXrF8bEy5eVC4hEer6mWmANMsfmUok9",
  "key14": "3P3ZJo5nRFxgMWim2y6W2qNWrzVifWRw1wGjNGSaG1kkmNLSsuuyvmPn8BCiDLwmrVzN9MypEKyiwvXsYi3skFyK",
  "key15": "2NZSLNaPmbN9W4RTuSXVve33JBaTDsFQxJmdi4ghfFnxtQFsrM5tsv3FpmxEe6eQFX8ktbrDTxAAJLzFcrCKAdmo",
  "key16": "4d2o2P6ATBuw3U6iksHE7DrYJLyAx5JHfQkbedukeSvHve83fr1ZjbHEvvyutpwy5XrCRdXiXRBgYAjYJSEpaJfs",
  "key17": "3W91L9H9Ya19C6xi2eNkEq6s95opTgBEUHGPua2qTq8WuZvqBXFzaz6xtnbTkhRTJ1xBk6sHKS72FHrkRrwi34nV",
  "key18": "5UR6evEqjjQipQgXbBdwN9jxwQ9nchP58pegMgR952JVvjomRLB8KYmvroMq2LsJikXXFtjXBLTf3iS8mHwx8KEH",
  "key19": "2nGy6VobWUJUTnA9vEminNJhkvFhwAxqcqL6KUn3dc2s3PDHz336CxpiAM4qPPYdJNAzsxdqCATGkGgQhtPZozxG",
  "key20": "y4b6rmTSqdP2rWBd5Vvt2qA1pG1MdD3f32oS5wRkWoTtCzSuKcesQZEbUkoKhfBGRhxkuLHoTCvj18rKD4YjAou",
  "key21": "4siEFZQhouBdai6AiZ5Y5VsrcN8HE8ZZMS7sVP2wadhyAZwBC6RhXaqiZ9dVbiYAU83Q229zKYayszjXatNw9nYd",
  "key22": "3pBnSFRvY2GcvULFcgE3iGdVjBvv3ud8n7zYa5sbHNjD224GzNfgLYm67K3eEtZdWJM8AA35utqgBg4Gv2auwPCx",
  "key23": "5VBTx4uVr1fxq8WvMeYENVbdwXwdEA8UHzjwgHECuNhk39j2PetzbyfB8wXTNERwV1wRFKYjnwHJZSDti2FZH1Cm",
  "key24": "zXwgB1iu1uSWKP2LAETNxnpt7LFxvPnGBk3J1FeKZ2abG5zGqBSEd7FoWawhsU6kp1M1jhpQJcoZq3imsDXzy5K",
  "key25": "2v39hW4ERKWkJoobSSoLWDDuXCqnbd2xETVitToJ6EHEgwQvYgUfWC8kUTdEzMfvLZuZXiNSxWxkymhDSYjah11M",
  "key26": "48iBo36iXe9v5DUxMaF3Jz5huAod81pvTRMPCCz2XQ34mSJAoUnbo8FDiXDjvrogE5gnPghQwQuxNZZT36VTPdiC",
  "key27": "2uA1yCv5MLXoRGf28ktks2dGEGFgLmSeTskBcVn4NPghntftop6uoAb7rTx6YH4HoGDyWJaSawr7HFjVqcCYCENd",
  "key28": "37rdV1fcNeRT5sm57ka2GbKXB5NgpKui5b4SVfkbk5igtU3zV7qvckAUyhqqoLAcRkURfcLV5LBW5HXsAzh9tFUB",
  "key29": "2XjXLBLMRqAYxPxRY163Tv7p6Upi71YmWVZWqJ9mVdd9LSUhobENdecBFPd2FUhvb9pM2euaBkssU4gd8DWAF8Nz",
  "key30": "2XNizbHzTTpxugkX9Hw6ZeDYMNjQX1BXrwv6wEHfVsbJY5stsJMu88nmTQZWrJSnQhLqAGNFjTBrf9bHbSDD6CEW",
  "key31": "4fck5S9ewjfmAzBNo7NikiTgfB81fcNVazZz8VCAWG9A8QHQfsmWAiCBFAzSYBjmAmF15w4MWdy1LGPuRgSPdfA7",
  "key32": "35m13UNmb4Mfxi8jtmMrYpnuhcoED3jm4nerFtoJE82GCRiCinVeajf12JoJhNFCHT8WaaB94AvZo8XvU8cw2D1Y",
  "key33": "27rJ8fqijkSdk1D7C8L62n8EwYo2YvrjabhXVrDtQUREnDNcE1z9BS7FMLXXtxeGXiYHvayVmWiXWoj8EipxvWSZ",
  "key34": "4oeh6tU8pYMQBUktVVAeLUkzXoTdtfaUEieER4Rzs2LnxPCaeDVbarY4XSiLvyuQCC8Eo9f7iruT5RH1K3PPj7JC",
  "key35": "3V54ewcprmmE8DLqCRwHmk2pgtaB545D9tYX3R7otGtpBRZ9ByapPHXmbWBuGmNok89avDyTr2TNr8aCpEeURi2r",
  "key36": "45f6oR8ZpGydoearuUW3HyycovJTcBxSF3CW8NviAGsyPFtdvswpD4b4cwmauJNE8cHz46XgRtsMQrgxVsisNRh4",
  "key37": "3BHYacNS8V6vahEJjep2JBBEiexoRLYZPofHkbewioqFmFeuVyD7hoHGyNeYjY1QWH2RV78wz1ReEDibEWN34ki",
  "key38": "3XyRVv6mxnXhkkNRTp4jmity7mM6MzsxVMRZs1J4wJcQV1WHp2Fsv8TFiu9aSsL65kiz2wcjhVWghxHbYvQspokV",
  "key39": "4hB2GRPGz6QgG2GN2AStFim1VTG6kB3kGUTiiboi5T7oNixtA3nbXABzgmHucw9M6i9S7motsZUhEgxjQG7nt1XS",
  "key40": "3kJWQiSr8R7MMRj1yi6uNZeq1BYttvh8Nk9QzpiirAawaEmKKqKGopMBLTA52pLrqXwnPjeh5qiJcz36uUNhpbrE",
  "key41": "4MWKKonNGKPiHokFdqwvRYMWGRCujvvJYEQTFUhxJ3hVHNMcycjauvEWApxhFjKSfHZXNU49caC8PTTzsfKZH1rt",
  "key42": "4ZB65gNvtXwQLjyJdTstAR717ytUvRmUDr8dYN4NirDJzrHwFWiAc6PeSfaGpjAMFJGfGTPCwzDsrXKNqtWq2k3Y",
  "key43": "2gLKjYaoNvS5h2os659bJsAT87mkSaDw2yawdBwuSPpzxGt8mqn7Yv8RiLdkDenmWqo9Ag8h5r5LuUCwR9PLZp8v",
  "key44": "33daQXkzeUxFvGbRiVLt6vgbuxS6eih8N5iXg4atn6oJtNYQgpXdgs8vpYugBjtRjwfxSisPUFWPCjsMLC498KyM",
  "key45": "2wmtL5skWXPv9F8t1C9Mu7Dx2w7fPm2TsYjyehaDUFnh69YboqMYCGYvxCzALFWypBkSR354yRY6Wey6L4N3VxBq",
  "key46": "53kdtmojjqm8xz8HpPMEHh9Gv9MKQ6kKPYFJt4n5d9nczZWhEQXT6HWa2R4yyfjeA1M8KWUVQXkExDWyK36S32LL",
  "key47": "EYDACDmbgLgqH2KoswpgUryzg3uXWfpydRf5npnKGd3UkQ7QCBgkbUQDJ5QsWxeBPWNQumDuVkvyQij1e3coNs6",
  "key48": "1Vg6zujtCYfwHheZPCiW1nsBDuW8n7P1rZuGH3LBmr9NsaVTTVDDYqHsXzwidzPpM6qMsjyjFgeXUg2A7A2EaTS"
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
