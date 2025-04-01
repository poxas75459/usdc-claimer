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
    "2xKrrdo34N4TyQ4iVXeNC2JUEkyXJsirH2pdsPN2iY5myvEr5D4wPujiWdaaFXmiArxcRgxGstdQ7SueLQNJkSZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J5weVsFJ1gwZLJyZGRjBs4tRdd5qjBWFcL1FmGDKVDj8phmZ8WT5YhrcgXuWokBjLqUgwj8Ue2gPkf4AMqzBiEv",
  "key1": "2NuwwQ28BPSD6FG9TKXaAK1BQNn2rbnfmMpSGSCWPJd91oLPhSJviWbc4LuHS46FCUVA8JU3nJLWYnxSjNMAzPEE",
  "key2": "4M15whTCjhMpSgmn3CQb339kVW662c8F61rb3wJTvRmno3w6bcvNqCW8eCgQEZjjowUGKVKsAmSfbGEy3UBCuiCz",
  "key3": "5pako9Xbm6Ms3wzdzaxADM7D643WWFbrf9oE4JiMcPfVWEr2anQTsY88us7ZiE7LypDahEfjWjeE4CS5yBnLkt9C",
  "key4": "5oDeSxMV6swHowfDvq9wFjCUwcXgj7vX6U6mcqN7277EFj5mMciFtvBLmd4Yu8zPhSMdQ7reAW9AYbeD8vDnPWVm",
  "key5": "3Pq4MKYap5HTuNQ1naQojgi48w6JzkSSsmkeGFLt18b2ELnecEC3dmYwLeUsSSHoKmxRMQfd8WKipB4SHEmcSR5R",
  "key6": "3dCvjETKAto8YVdxBNcpeArmdq1sgyaEeMhc9LYDqScRKVp7P9tQywh1RMey1KXj4TYDuEwsRdHWFb46WcY3VcKo",
  "key7": "2z6kaKqLDBVcF97b3yqVRTrxhvVeR8ZbFYHM1cbfPhs24gh47E68zoTKXbeyRT2cx6ttYWzoUQP5VWfg1XWkfJPF",
  "key8": "3hV2bBmbavNuuA7EHpZ6EJ4qfHzgyc7DJbd3didTUjf2ScJDEF6BxkrQkhR6SkHAdxKRMYzxRmSiwnCVbmcUQUou",
  "key9": "CYTjHpavK6yeqD8Wq2y2dm7VQw1ZUjkLgNcKWwKf7vgfRBJWbBnNuj6bCNn6XMFMLZ4Ak5gFixijMwgWiuVMS4J",
  "key10": "314fgCWB95X2PKM9s7zSakL4P9kT6rc8zxQfAzvMNeWNjvb1CNaPh5WLGUxgyFtvrSURMNpdAMweB8MCn33J22sQ",
  "key11": "2hasYk7nN3FpmBRevvTquFQ8YbsU88Yn5xabAYFq9DJVcuxwUUtBkxiPncFRDtaYfZCyex3xahRDqa3sYXaHdzGz",
  "key12": "48cY4fEnkzYBgSzagCmsxV13ZN2gsUCbzmkaVSWxsAq1if484d6W2JD7pAudF7MdVqJiWu7ep93zjGjiLn7738ZG",
  "key13": "3xHeNKdQqhXyVnRHDGuEFR3fYx415HfEwxyAgcBdeayQhmGQ9gLAZX1UHWKY4XGAErdX1DACijyZFcnn37fiWmWG",
  "key14": "3hTqrabnUowtKJw38A1gMm8jTmdtCrNiYp9MZrYqUZoP13rMBv7f581p1L1FT5xQ924ahTgyongZYZoj3bDCuJGe",
  "key15": "tcazVgBz9iRskwAKBG8YrrMr6XbrDcQJ3S9YXg5QXsjdAVf3y4QX277pAYLwDmVxDZtfGsebQzZxfpuPuGQB9qu",
  "key16": "5VJZJTXxdbyama2KWuvJtwNDuC49TSF7vjhmZgRZcLnmnQidTaQkw7kn2mwR2WGTMsenqr4E2LQD2GRAoV7E2KHV",
  "key17": "dYUwmUiG49Eubyke63W3GzzVXDSL1T67LDq15wvAxsRNU27j8TBDyMe3ppXM8VPM7h3rdnXTHoqXdrhmXKwdhXL",
  "key18": "iTdNTHp8AHijxWZs9VfEzUXkSWq33RQ7bX85ue7bGmq7FC8ajkyLxuapm2ArWwQirmdeJ7YF8wFL7ozZNkputkN",
  "key19": "3daegRGwuW5VGeLnq9GHg3YMKVrQJ77rQDzHryjNCrd765caJBypFBQMknSLdLbwrubupY87YdfXZ4xM6bQaTpUN",
  "key20": "L3aeCDs41TthknDLYmdAmtgcHAPGgt1zwV75WusynejUnbaLLrqRFQ4733kHoAWFM1mvHoRzYzBkNay3mtxx95h",
  "key21": "5GXx3SsGfYYVbcQFqptcceyyqeL6vp2fejbxtZoQzV3nPB2wF3q48ow6nCARaovqRao2Fam4LHgPwzaadyP25Lmt",
  "key22": "3iLdLXjs9fwfqhTi3j5sDaNyFV3QzpFNYdn9rExKQ8P9vL3oAPM227W7fVGQZgDDrRPYo6NJGHjsavim7bSDsz1o",
  "key23": "4W3x3DJFNuNaLazfPCouWaPirWjHEXFsgv6fb1MYJM5sBMaqqs8r6nCGjrny4ZYdptVrhdoUZCjmxviFaQGFtJ6M",
  "key24": "23y7d4sDpQGZrmuB8knjh7PRSAKTAhP3SDotmszv9UkQvRQiKHrZD2ReRGaugqRThX8wVLCzByVPXou5wKJEB1Me",
  "key25": "24tZNfRJ74LhsAnz9NeqAPoiU2YzuMygQrDBdyEzYSh6m7tCThY14CiJ7Wb1Fhazajgr8aYFvGctYAkWWmz86rcm",
  "key26": "mEr8XaoLadh8Nzdk7xt7mH5P9yqkqKvgKi8HucAQ2i1Jutgtm1pvCQsQR7FZyeybfHnGeKVQRSVAiHaTv9KuTSB",
  "key27": "49EhxotnjF7CT6kDACgdfWQGok7EnKY8ynpk3Jvz9g77CucARfdhRPbRRLmKMDjngzkuS7M3VxHXGUYxgBww1goi",
  "key28": "4y6Pb4M1xYwyZrDhfmk35kF3EcFYCCbKcqocEfJBJYyVFx7NKPW7E3HfEBuoqdgTW88rUFf8Ei4n6jHDMNwXsaWZ",
  "key29": "5CidJ7NQqdEqSgyiSFML39CAHjC4usAGsjRj88kwyLaoBnix9oANSGbR9awnLBG6NNywA9KvuEFnPDwz4pJ7Atwx",
  "key30": "57sQUWvYScVvx8nFPe98XkgxkJKvPDCg2FjtpjDUfwChM14QZwBqshYWysTtLEgt2eVKYx55CtWpuigEPYDXtR2n",
  "key31": "5E4qZK1FZdGnTkCfH6owHpwaZtpY9RSuoAB77Y1BspU3HLdXic6S3uPgFrEWLbghqX5hZGdb7KC9UDD4FaivBDu3",
  "key32": "626RTJKdXwqhjpc2vednuhxo47FaYBb4MUXJWfcvzdQf7bmURxc5UF6RoydrrhxWiTsC6rtzuh3rf8RHe1vvFUvA",
  "key33": "5Mfc5WYnLi9T5vzZvc32SBXQXuvF3z2A89xrijYqbq5dpvVHfaJHBDPzhixWMjtitgQ6VQE8ns2YhQymxbYQCjB5",
  "key34": "3H9DiddApG9ozRpj9Vg3BY394iH5TUk7ucksnvnuZx4Z7r4AzinQBDjaYoKCdjTCG3HNEx9NLdvQk824ZuKn5qS",
  "key35": "5ES1BFTVS3x4W6Vv8h632ykXzwJi91Rn3Jf3e48R3q4fCZyPRBLBEmi1Uw5CucWdTAnFq6vgKQ37Ua5vfdfdaAhm",
  "key36": "XgzqiZ78ZQCqahn9fmr5J62y9QzbhxG26AE4DMAuPDvMZu8jQuPpitmHRWjwBCBPkcw8pEtFptKjNun9ADfQGK1",
  "key37": "57XqWpqpHNWaSFdzpKgbGuV3VLbNWKBQHBXnh6KHxkS1kXmxaHS8hreirwh1Nfp8GmMy9V5tL4aC7QYVpzBLoHLy",
  "key38": "55L8WkjCRU6NFTUNXLUNXqNi3CkqKNaEVLRE8kTccbHJLSbvq1vCis9ozrKbzD8SRELK61XXsBESwLHf315xz9em",
  "key39": "5eFFkVCzFbE5mPSfCDJFBCpHchixFPA7Yr3QNxMfa7sfavPkPJxXzap1Dh3NNbCXzmxxzKELJWE4aZqfWVgyxZnn",
  "key40": "tHciA7w2jqB8xswdpc7vhMCNoGm9uuVWZ33p6LFXqkQ4n7GiUHgnLrv3Nq4eyD9C9UaUBMobaKsmrgeBGdbDjga",
  "key41": "gQ7iQ3g2wbtFPKAZRzs1eeuHeBTSwbDkkkK5jKPJTZuUf8nBRg7mUNj1A9q2yryXAWKX3DNXiStLaPnQy37K4A3",
  "key42": "a3sZZZHyz71GWRiF4kKXARcijnSK8EbX5snimD2DJJuCh1ib5Ntag5JpDWAbNhkNi5e3tVicDmVTz4b8Bfrqz5i",
  "key43": "4p9VbpxtVaf9AzdwQy4r5NVwxC3Atw27GATrzu2LXvZAFPnz52iWT1oe3y6dsQikUAqEiqaaNCKzeXsqcv3np2jA",
  "key44": "4gED41YG72GTSbTj8dSHUmivtSjzSgVrqYHY9R7gFDgozqEnKemnytifpeYRLRkNNCewQKDqEJHgV8iHd85XZ4wA"
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
