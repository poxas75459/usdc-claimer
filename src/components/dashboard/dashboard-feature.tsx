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
    "2vYxSoMsur85UUy4rKseRFSEQwdvtu2SMcAtbFXPKMxynfAKLEcA2fNhUK2bRekEQKQnVDVJeacExTNAgAJcPfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "432njoHw9pghE5B6qtFLyjMhgkK1o81rGrSLCghfac1FR5VpjStCBBMEPJZTe8KDJ778KbhxMpYF1uypPLs944jc",
  "key1": "4FDzRsARTzDLdFwdAAUAJHwU4DxdWAK6A4xQswxeuF6Jea33AA14BFsWJYPVA7nQR7GcR5vNWEcJ2bDfp2V7Wgp9",
  "key2": "PpC4DwLN4hkx2CksMJEZS4hzd5g3DHJDzexyHdBSMHuBBc4XK7caaCwsbm7ZU3XKncjjgXDto24sUK4StWjaTN7",
  "key3": "62vR5rnKAWy61Xbz51tpmxv1i1xLwu1on5h5D1qYVdXe5d3S4TqGmgBHRuQGgdUK7q4p985GRK3GGSAFZAHr6Tg",
  "key4": "jY5zFdYUEr5CzywWAVTyP1PdE1NkYuSF8nUvvzeo47odiCNnJDXd2HmqfsUjKWuUdpRi1Y57VYDZBYq66spF2hb",
  "key5": "2MuAPEjKDFZwBZUTsTE7gqB6jX19HoxYwzEpqFLo15hmnGU8NZnuYPTHAtfAzaZUYc3UYMRxcrPqjiaczWw16oQa",
  "key6": "2rTLEuPWUx3ZBgkLNFNSpdBRqxJcCUND55T81mLXXbiaGwtfar6j26LQibzi6hBK7V9MySN3QdHBZxJHaMxmVKyc",
  "key7": "4dLVKSykDvy848on7x3XHwADN6Fb1JzLwDrvUskHCCi3iuaPE7EHZA48GV2Mh69F6tGNkJFtGV91APXHT9zeM9aH",
  "key8": "3z2wpRwiMffmCVKvodzRx7HFHY5mAJ7cVmia9d7zyL9mPMuCqwatt6q8wsDNFEP9e6mYw2EqTgPeWwiziqS1pCQf",
  "key9": "cakRyM7zKpN544FrjXrbie8DKebkhNxVxoWRW8FS6nChK4VCXbBpLD8sKGXysGesrnev14TJZQWfVozTypukyxM",
  "key10": "4YHVia2Wj4i4cDoJ2zn176Cq6aHntymmDx2xNf8iwRrEYNgeTDGBYPWaAPg9RpPmSoGCUevhQh2hfTADUZuf8FQs",
  "key11": "3UB6PRegLKRvxCwLD3vqMbsAzGekwybPxzWTedVxr1tg9Sc5sV5yCa5qsJBSWcnRH25fRDfRZbLp1TJP69z9rgan",
  "key12": "2TLfL7UMVMLUcxm7QxvNhBR4o6nFBBaL7aeZxvPTBELYKC1mUxCPYXWHjqA9dnzKxhieKHcAX5MdS5KdSbXzNWVd",
  "key13": "3YuCZXAQWHenzBLSoGPPFGtGGhWNE1whvjTyTWL8nn8JLuC2pS8UXuzmK9z2B38RS8vqSmS1CkVsL7TBQXdsvEJc",
  "key14": "DyKiXvjrxY5UyMq4BWwdPfsnMr87nxprBM3BrsLrLNUStqhTkYUcHvyCWvEdJpFKpDZFZCgmqaKhoMQQ9vtFx6W",
  "key15": "GowrR2eBdVygr5Dzu3vAdo3rKspXj6fxCLSvN9bgQydGtoW567v3i51oByse3cL3aPxmc7yNEvwFz5wMoD25NFk",
  "key16": "gFVzc5JaD3J2SFW85BnTG3QdenHUbsBxrvr3mpWAPA3hYoS2hEKK61SPUtQ6cq8mecnVs5fBrQe6Jquc2gpMDYS",
  "key17": "396sesxoWGBG7kxTZ1kSQTtBFHdpQgvpd3D43udUuvX4oyg5Mte3mFf5mKbnMr51GiVVnyusof5EAaMzpGxrtFJ7",
  "key18": "2TL3rqLYz9B1pDeALPzFgVWTrSquSDQSuKwRijiTAnNXhRFwiQKbaLaX8QfKb7Hd7SQz5YBrLpDfMwj5Ytb7Fai2",
  "key19": "5SS3Gv4hZ6YkZgiAL5urvTxQWcwARF2tTJmKkQQsVsuKKRsSWhHHdrCH5uAsi7WG8mARizE9ZTLaxivY43NAUj92",
  "key20": "2u2Dnb3y57C5V1YrJKPDoEJXTLcoC18u6fGN3KAqbeS6bMB5PyaAZGEs4wYJu7PBDgczpQkJeyN1ueqFb8Q13oAu",
  "key21": "3pWYbCKWXFFN9XkKXF6UALaXim7VSbQ4LEZiKGpge8arDMxtt6w5P22H6mRFNWukLBWrtdL3gSScmykLCeaJgk6e",
  "key22": "9H5hi4GkYb8x2esmv24W5w3DzBGgfGGL5pLkb9cCqRDR1QMvGbQJJbjPqstnEnUzATdDxQEKMuS6c7HAHnioWCN",
  "key23": "4crmn5HhSecwKhGCT98vjnkvtuE1W7mAon3TejhUSsmvLizBZkr3EmaCVsyiX3gzFH1KUFLuGjDxb6ehXHZxgoLC",
  "key24": "24JEWeQRhnhCdYBdPDeVLda823WBJd9MeJTj99vjvATD94vCJnHaXQXwRP8diZSp3HAXCNmETdUZ4dGduyYQqBxj",
  "key25": "2hGPDTezDF94HAjw413uC3A1bhRLrHfM5yMmKbpXHNtzK5PrLZ6P8rq4nVnBH9V5QzXnXE3uTvkx42Qqc4E3hpvY",
  "key26": "1rR2r2UHEX3tYaXyvhYnUP7TUx4125VTV481BiPCC21JAn61cUdTkvnG4eE1KGRscNXW1i9ySB374o2Rbi5o2i1",
  "key27": "5VxKv449mGtJqSbL8h4gcpWMZgs9TY9s22m4d2gwCtzba9fWa63qZiuzo2ZozfCtBRQWGaH2G1g4ivoRFscAzRjU",
  "key28": "fq7Kc27gXYrXRRvL9kRrT1PANkzdayUA81sKRjkDJ3MKnig5gobgYpr9NddV1qCxy2uWvPBvJqxFEaivsnvyDMc",
  "key29": "5dRE9MuKwsF4ptnZo1oTK2SEjBx54wkvTr4ZwDJZpqKVRaCdDjxm8MRNWGSooLpMnuck87cLGLzqqNvzXLEjLDuq",
  "key30": "2PPDUmBae5gShqfo6nuqF1DxssygrU9nPwBw4HfKP4okETcCsQffNWceKmMLTyVMYtuwTbNcDwkAi1jZBUc5qQy",
  "key31": "37meZsuvoUgTbvwevoDUJ4iGFzBBZQQSszsqxjWXpcChWM6TLJEYZrkSHbsdhUS2QtsfutECUZVxtkrozkUMDd1N",
  "key32": "w925jG1mg3hhH262wuiogxrwA1rU8n982RPc4MJgeZqKNf4DCfBFgosdupBsBy7T82HDDRTaqM7uB1yvrYbFQaV",
  "key33": "3nuzjTsmn8w5pMQQ4oAS39seT5RFB3WkSXvdVdLNYnAgajk3mkKfbFBZhmAw4TP3WUxRY3c6XTQwZ5fZGPjASriP",
  "key34": "3GQ5VRE7QZtSvS1R1uHMPi5KiTi6qj8upuZbrXbrT7CycsvT2qCKvSHze8rLfbAqKyLt1rEHsiE9ZGKzkosBDVrB",
  "key35": "Mszjvkt93s7FKv1HmagBapyBvUfTwFEj6U1PdtWDq8xD1zREGrj1edww37pjbMggZE6g6UaCdwjhtMHZRXwhJRZ",
  "key36": "5NHmtj1ooKGHEQ3mQEU8qNnazZvMVQM2LMJfiotUYMYHyPeospmbDWkZU67B5gVFd7K1J4N3aknwkKvKbv9e5mkz",
  "key37": "4DFv3vgRzQSD1QfKXjAfA4i5EjpbGHE6LGQrA7mCKShdc9BLWrhrJLptutkwhFEUqd7CfCrk67MYeqsBBABM7XFe",
  "key38": "3usdYfuzCGHEU6ZMAJuHtamnLoygRH4XmXoTHHPEP1Tm8PGCdQRK4MgC597y3hzRy22RtL8ann1RUSqfipGKLSuE",
  "key39": "2VMik236dp4RrJRmMmCxBeaAos5XfNhcVNjyxZMJgnm8E4viR4e5fFCtPBbjfxrL6GiU6erAEgPGY3ez341XhMew",
  "key40": "FYEV9K5muWxCCaHhKaD4jf7oLxaDXdzm89xySS9Tp3rTk2Vq5pNRZopiPE2v8RtAaP5oLyBTQhLr4bn1Pfagke6",
  "key41": "4odrgCC2grpvKWByWRncM5gJafbSMs12ty6xa7NEjLqgy9DcRDypRJHyM2rtZ8rYnBZazhHnbEDf4MNL2QQvMya4",
  "key42": "Y5HQww26bsaFX8NmVUwZqrtesmAC3y3qEzxhrhnxYydTUo64nE49LYWi6ayqZK1r6UhNFyNrJAQzaWbqp1twmV5",
  "key43": "66pnio4mmbcqRjxHApZ123mKDRTfKRFQtL4E6CWMAC6SfEt9x3yEB1NbUciPTpTdUNBeUBWbLHMn1ejp7wcN3ARf",
  "key44": "3wtf1gBLKLPg7T8PtqdiwERhbssADuwSweJtSBaErkgxiv24xrV4AESTujbiNfAhMr6Vr9JSjJpeqAqEuH4Rm79t",
  "key45": "4793uJuXWSTSn46VKFJBbATwCqXA7LmfBqLcHx1D664q3szFWatehrHc35RcCJ82iLG4De8QxH97Mb3RRDauTY3Y",
  "key46": "5heGEoJcmaWioRcPfhxwdqgRuVVhvqtfeqWhKHQG7KWoYDHNDtExzxgb7psVjYto9fPPRnSHvcAvkybb1ZedZjR5",
  "key47": "3uJa126WLEDjd7sCbVk6smkGb1AD8sJCVKY2Qfawa5SmQjPEXncYtxVwfj8ffbD892hLa1JbknWYeXpTQfTS5bZY",
  "key48": "kiDjTBmGdBqGE7STWNFJzcpCJwjChQVQ4pNMbWRFXohaVF3T14W6gnPNgz6SDEKag3FNzoCbXBfGSWWJAii9VfR",
  "key49": "5NZTun73NP9VXua4DJtUTCwq5aTHd5gZmY9WWoQxXbUX7kfAFnHZjQP48hBbNZPnLqGJfJQFCBh2SdCj2eHcFvGU"
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
