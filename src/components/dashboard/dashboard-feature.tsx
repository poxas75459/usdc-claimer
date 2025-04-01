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
    "C3vCueX1V27fXzGzRbk4mkjmnwpAN4JtGseDz9Z7rZfszibySL1VHENv3odAGk8pjdPhhqqygRpK5BsKfitGVAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EhAazAW14CmFwoVWCs5UqgYnDL1ZseG43vsHmDjorr6r7LX36jQfnuon9HfHaMtxkqCCwq5GssxK8N625FaSX6K",
  "key1": "3LN44gSukvcxy5CBcoGS1seKwpFoq73VfDjEdyK5X6CdFNPsdQiEYekSy2LXfWp7hKa4vHKp4hjw3ZDQNMfGfADR",
  "key2": "21BNuL1aNudeFYkJLG79sn3n9T2mnkiUZHPVw9mrfb2n1CdD14i1sc6xfjghV9eHKYXGxdqeG9EZ3qLf9wHDXRn5",
  "key3": "4fxdy9g1363N4z3VqkuCTAxrz6Zepc3HspDhfJuL14VVS6nkLT9PREJJ14XtRqvaXm5wu7aGpJ9h85hocs1RUHsb",
  "key4": "3JKN2tpWpidVB71Pzh81irY8Hh2GgsPtSvf6biNhZJiAtD4jeg3YaQSorQ4egTYkE2nmwFs5kQvkiD7Y8x4AFixF",
  "key5": "4E8CEis21THCfCTWhSTXqSdpP1oy9xbnTzHZ2H7hsnmtwWHaH5ryXC1ktFuaa13sA8LNDYVPY1nAHyDAjk3P6RHq",
  "key6": "4T9FVtkf1woFAH3zz8w4XGWyUyN2nDTaLQggHfdFiZrdpWcArQjNecnS1non5HaUhN9aqvLfQuxbyEqU2e9Y4XVz",
  "key7": "5C1bxPAezWrws1JitJxPpWoYuTRh7nutnqfzbY5o7Umwz8YMwFy1kAQkvKpQYXPH1r4V4XmvxKJutzMRv4ScvHiB",
  "key8": "4uoePqGhKEV4oNHYyuuNTZzoFDR4e8sXm1dZwG4ecEU5bBf98QVfEp7npdyWyyMoojSV3WVSveaHBQ2ftHysdTyg",
  "key9": "Npypcay9aX3GDwNyJQVQimq3iqH5KKHupXiRTAxL6SMrSDPnwnQK8h3D8cEKUX2dXhVYxt5tPEPEgRh615BTpJz",
  "key10": "2kpf6ycuFyRKXiChotqo7b8s6e5pFhnjNJzhzYx7bZjo51CRh73ePrEnDcXnNBk5MYXJCr3n6ZnTTJsRgfwuPxqL",
  "key11": "f9FhkF1NpVyz5Vz5AR9GrUkFJ19Kzc1fccMT2d5Fuusk1Eka1bS1dzH9JVUWYoiyQVu2qdLRPVJsprJfVVYC2U6",
  "key12": "5tg12A5gn1Wf7kAzYDcdyAn6M5F34tQbsVfe2xDFMZpK7u5zHLSrmQViwpHLuPL7oNcTYKXcnCtGYJxXrqYjPLiW",
  "key13": "aD1r1eVQZcdLFEYzhnARgNkbxkXXhQTvtvDpKXduEPAVaxPsMtUEKkyWbymt66PGmvNa172qRBNKVXPCKmSuh5r",
  "key14": "3iGneaUqziJ9nbFEL1b7UESbcN3PHNtp8frqZph4JyRp2mh8boRSCBdTLh7RH4cv3CgTTBVzVWtwGaz4pYvm2VAf",
  "key15": "3mqYdTAtMecQjVbWJpWi7DnVB7n1evXW2rR7dJ8Vb97ynwTc74DKDsvkT7Jsm4JS2cLQgT5JSwP9ffUFLy5JLDJx",
  "key16": "C9KimaNwBQx4vurGggBhHc4L4kZa4ySXY6SfdZN7BxtUtSz8YUfU6bKptBmeicXo9QpnX1DE5cvAeJNkACB86fM",
  "key17": "4fuJzbMBNzgG5UPudjoyHVBuixZaXYRg9H3XGL4CAjVkeZ2hkyxAmUuwQCBcqLDQFYjjAHZvSMjrFp8xw3wDuoox",
  "key18": "4GuwdN9yfWDj1iv25sdBjtTemGv8ZEaj5kjvrr4193AwQD16fVsapPwXdaTGCX3aWzo4wcJxThKdyZF6m4TnuvtF",
  "key19": "4rVWLfv6HG39eyZcRzfCVTPKmaoS3ZPaEjMt7FG9RK1dUf8wJg87qrmGC9i8NYovERKFhxVByrMX3tmzN1jGmJxW",
  "key20": "3jFF4WdmbC5UgtywqUfsQb8DxHTvV9sBUnLUsgU4EuSuVUB1HZaM1Bz3hhgnbGNoz3J9mCzvTp7tmHzZAd5gfsp6",
  "key21": "svFNPPNDquaMYojC841qyV4eU3uNaD7FjqMx3c3be5SEKq4XpEzfAnSEegZbPQxaneZ8rRpZNKMn2wyHG1Hdg4y",
  "key22": "3wCVgCUuJV7UkKZADB22MNbet3zjCp1JeueKsCUFqArrjRw1NFMn9KdDt9QWevBAgXxGGyAebfWAPVNDqTghcU1R",
  "key23": "432s1gwp6EdhWkEPwC45oMSyNWEuTFeFbeBNWMgutScYy9qo91GW5pBzCuFET4DZNg66f6x4gQbHUPKBANRthFua",
  "key24": "5e95HK7mDKx2JvvXXG9L1WsKq1t2cmRn97yPXMuyY7Qe8oRMSgBYnBSwgBYRsuuEuarxSvY8iHHv45bu4twE5WaN",
  "key25": "5Vy3dkJCTjH5Yj9cMV31bvSgChSBLJZtEJULVrBrPdpPTRoeLuwvTyMbtY738syArUomuQ91hNXLg1gMjwDDmu7f",
  "key26": "2kEDN2K1dNw46qXUG7LfTcY3YQdVFXLF3NA7Z2ofGQvwHJXa3P7SRHjCqZM6VcLdKrmf2eSwkH4m14mTgCAAehqA",
  "key27": "DttvkfxWERuH4r81XaKhnPhRuAPzbtG7sSFtMU1CWhowdggBwpMsUBhtvmS6Mds86UqNCGVb5QQKJqWXVrTnVLi",
  "key28": "KBLqHimzZjpqtY7sG9Yha7urqgpiKg4Kkx9ARqFXy4U8MgGFtAs3ji47UbFLLnbGx6xrrGDbQzdN2pYLH5qLn8k",
  "key29": "4gHyw1kXyKEtTxxNc4uFFDgo8GKEyhRKwgzvuRm9vLo98abJYRSVbkr8c7JeGfoFLa6U1D8ZdXDcEQo9pev5VWb1",
  "key30": "5U8TrDYeyD74jGbBqAa5yF1qjzkaRrk4n5RRM3cs65hWXPrvnpK4M9WBtXQjERrdB7F6v4Yhh1t1kSvt5Dcr7B8X",
  "key31": "2fsbX1xesbkf6TpnvzPiEz8Sia4ij6JMcMCee1shzLdkba7ghiwSwAnuXKaeb5twYu86jbGkQjVDwBu4vioxk62e",
  "key32": "2WTPtgPtUUSarg3JE7M6Jaq6JgZfP7WL6tpNC2qikgdc4fHGGWzduR2J5zRTafWMhMQC3GQnWnX4PseyoyjFpTAW",
  "key33": "2irK9Ay8gvHTxJsjwskeumoLAaockfM1er1NMgc7gAK83msDpdmfkqCvUFQ7XYyYwNhVtrZaZM1YrSzfxJUgC4UG",
  "key34": "3JiwmvzhsGS6Xs6qjmn65vD7BE8W9Dz29BYW6Jtqj6LeNXzp1qBMxPtfBMzbK923eqUw6M69ic5zgxP4r6kAkYri",
  "key35": "3or8y5o8ESQJcAbC4AZebJsso3wcExixXQoE38u2rpTnbY8FC8QkVzS8gtKMNV361RB8mMviZABCu7Msu84tohUS"
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
