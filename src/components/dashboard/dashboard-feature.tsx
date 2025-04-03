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
    "2ghBWB97LyWW97xMWkjmNbCS5bDqYa7cxCMaEk4BP19euwpeVTiiH36y3yykrWHuk3HfmZZNFhXMrAZfVLW2KXvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jkeuABAdASW2sEdXeubRJSkV6trWkp1uLWUHv5WNJBqq6YMK8AVm57N7BvYVNqexPGLTQjutNNXLiCY164Xawj4",
  "key1": "GXi7GCWPuYafopYJjp66YvKWYNaPaLujtmdFZLykwGHM4BU4qcpmVV4x6UC2DfXDXRTUn7XFKHBuGktjg6E75gz",
  "key2": "2yPnr72DryYRjF3wT7SKsRBQjJ2BEpucyE5hfks6Ham3vnjmNy89CVjcB4ZeeWKnrAicVz3uQk7tZexmj53h48c2",
  "key3": "5waB5s127TypFXmhuR3tH6Eqd1dwP4BushZE6xyM94exCzi6rsGF9JFCa6YayT9uxPWyi1hkMGuznWEu5fMrMX4W",
  "key4": "4yn5FieguejbcgPD3Bi5nTvLmpHnuhWX9yaWvcRkjunDSsBzKpN7o7JTWesBBSbMPG4pFKpK8nDdEDa4ngRQJg6X",
  "key5": "3ZcQu8ZDo4uqkVmKYi8Z9kYQu5wYEKCkG5vJzNVKLg89msrsZgmNWkfH1hpyHZQ9fVWLDj2Vx7RWiPV2mWfmUbyy",
  "key6": "4wwxSwQcrMfR1mzDqrhkdHWVZzE2s6NLtt1n4N52ighuEydTKGcsFCSpz3SSFmMYHXmjcoLxAjEKLRUoC4GP7oej",
  "key7": "3Yzxu6XCsPfharWvUSpdScxVaeMXSYrA7vV1oxEPmMbrfuLdqVSnzjzgsCd8zs82w63nbUTi4R1NuPKtUA5bexj7",
  "key8": "3RwCwLiTY62Pevq3x3hSy5eNsng1hUi8V8E2kQgXJzYRtkWxG7EGGn3gaZxhitzDWushakgdi5AQGA42kx5G6fAH",
  "key9": "38WZG3qf9dRdqo5UvDZAXgWkPEbqxDnzhwcYx6QxPyaFNeLnu2zL7hhXDQYibgZpQoZaB7gecF1XNqZnamhgEdNX",
  "key10": "57pdrucu1SN751XtKddFSn5R8fmdq2vyLJ1hVfs7f1NfC6rDDbvJ26rdpcEG3SouhjM5VcKdPGyCM82wDrJBmN42",
  "key11": "5fVCLqdTQgZEi4f9Z4tuSgq8mAgo45Lce7puRb2wx9NiHCVoNXQLjYPBAztfoGQEzFPvUL7efcvgNrgwupvKszzW",
  "key12": "HJgakev8TJvStgMeHFH36DNtPuD6wVVdniNcnw3X5mVWLHqLPTBC2Mi9xHYM5WasdHKVHcYRSk5B3DoES3NiGZF",
  "key13": "4hh5EUQzr73wZXGZy318S5rUic1cza6GqLvPsNAyxdGXCG7KXkoLYMLQ59nFHPNC9R9b982ttzmP2ZJvH76ZSHEi",
  "key14": "4oTBcGpk4QLuhqU4YrXQoznPaUuikppt3x5fUC9VWHVyYE2rhkhZbcnt2esF77umRFYnvkwZ5NMVr1MAVSNLMzH1",
  "key15": "5Sa6J4yy53fCKBdASfQPAUmKav3Q5DASBAQpDawau6BsDTB1jxC3S2Cj26rxZWFAfUPsLNcDRHTJsmZDuLAthR6L",
  "key16": "2H8FUJuBA2Cs894AN8vWvMDHAdz8SPKrhkzkmuVJu8wiucLjF8HKdicmj9K1vPTLjirJ3dG1DpKP3pB7xpdPq1G",
  "key17": "4RDf5QgnZXHAYvVwuKkLqmC8x3XFzT14myZx3u8tagmKV6nzqkzPZGhP4VUapyC32rsW66oSKAjqiDdvJt5BETbf",
  "key18": "3mF8thtKreLVBty5TAVgokEqbtSm5QRzixaSHTFvmUNyqmAfbpPMYwXrw3QYuVkkvB8xP48dYW1jHSVehC5ZyRoU",
  "key19": "yxkUxWUzWQNVgKJwkaBAms3XH6TqNNPyFB5WeJYZhzUey1fgfDcnLmmmo6Jp1Fim5VVcYzxbbdCCAVBJX541Eek",
  "key20": "5nxWP4os91rg689NF9KuqA5wRMkoE1Dc7R7uX54h4AYG9vHNnE5dwrjqee8dStnZ667CmGW7UrwKsV9M53FByxcB",
  "key21": "8LXq3rL5L8tb6a5R7v2YzsYQQNyDvJAjhpW4o9CWmShfNp5VsEPKoEHAnzAPRU7nUMeVsNJRuVWf1vubUMCTaYL",
  "key22": "5BzR8xuZWVYWFwPdLuCkpvYuytYqM6owHo1Yt6prr86vSRZr18MtDYbGX9rqHp4SH2mmzkXgbzGk18qfTQobzcpk",
  "key23": "SLrQoGXfnqNE1omrbbrpkRsmsk5VFx8diRKJwiApH4yViBCLXvP3TcYfLB3UnUtTHnYW45JC2AXjav56CneJY8A",
  "key24": "5gsAirZKnE5zQMMZCLoYQhRhew39je9HJPPCG2918rsn3ravdSk7RXZrNx9iuD1LLzS1tKWCsduyEh4NAZTM26xg",
  "key25": "1G51fkw3GtLJ9kSoh9JDuENo1ZeibZuDt2MvBaan6M3Je6ghmtNMK8UQZcqNstQRPtWJ3cW1xCjtzL2CS5qCGUF",
  "key26": "JizHJtqdVCFYqu4wFkj3kbFjFPkhqHJ53qZNmKtQaSb5gEn6DN1BtGMp7Rs8o7Z9CEUQRcapvEbi5mUQ7uRdpAe",
  "key27": "3QzRf77uJfPGzPeDaYkdkUVrRGkr9FbXaZvetE1QSpxcNFMsEbFnGVbCTz2pPkB9Li27AenHsEM72vvkuYRAqfFn",
  "key28": "oR9EAnvxe2fZMx1NpBBo2C5igXEWwShXZTrrNkmsEQEgJKHyqZHCmhwmVXUVPMJC9xNPwL3A8Lo6g8EdpXhh2qn",
  "key29": "5BWZ8zgau4hqNbMnghWyMNeGAqfsVjDoHDKdggrgAHX8cNBjYYMXPoEMEcU4qPhdripydcZPLrWJdbzC57kvxFLs",
  "key30": "RCMp36VxpiyU8jA4Zkff6LxRSwK6eAfK7swYhnqgCXdFydM9XWfTzXo2vUnWd3KvuUq3tmFmLVZ99yodtqtUsny",
  "key31": "3uw7uo69H4qXyP9Aay8vKJ8XXTyN8DwvQevpS5EChJFDpaGtScQprCaZx2msn6UHam91ccbU6siM4L2SKviTotMh"
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
