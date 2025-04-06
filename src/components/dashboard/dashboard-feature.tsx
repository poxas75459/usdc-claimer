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
    "2wugnwRGASsC52xCieMoihrgGSJ5pjfiXHYBJfD5NcJboS3yHcXEkgYnMDCs7wL5QyHPM4GqTmdbLkraXDy2vHR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CNZLxX9pW5YU3HiesXUiWALg3KBDQcDWwyhc6FwuKjDUMC3mzspTb43EwnNpbXvYGPDN8YLCvA2TrwJHzUUXuok",
  "key1": "2g5fsEBafxkn93i71uSBSiLQnWjEqvUuWVJZyD1LQ1KzDfmwNvgSb2w8iDVFaCyiZLnSQ9kh7bJ49aYF69FnwsyP",
  "key2": "3k9JLNSTA7LA8Fs2LuPaAweZ4b5bQ2rDZdUHtLE1fDWVdeFeA3fwB4gJQGe9S3G4Zyd4CzLVHo2iJ1S1iaChq3Qq",
  "key3": "2nkizyjsoZ9vpnYTQguXoyyNYEeAouogQsWF83aSUmJwTahsXt95w9C7kEStPrqg2KWH87fioBUkDAkoNJXgCobt",
  "key4": "67BkE2ATY72ZdBorECwqeUAaKTaET6fh8xBhwTTNht3bwvs6jxCL5X3Nn9wMAeMSxeyf2pSPhtZsiZ4jYWbAG4Ef",
  "key5": "5jgaiWjdeS4UZRL3gw8yCDHFky3oJtpfjRdRJuGLCN8ZviwFwQVFrPw8sMY1aM4CHBshaVKM13bLBiDw6ywJdXep",
  "key6": "6Kaoz9VeGCCzSBNsobWiG7DUFrr5cuBqQvyTWE5RTRBZsfrdFcVbXEr3Qcw4SuNqLwiFZGoYakpEW4RiAyEbxQe",
  "key7": "2TMq6HBYXj1Tb1uqJBkWSEjBaMSfEJeWC7znPkwMFNEY1YuzZ8WZcmCuJdTHDwt4AU1uK9YtTQ2tVX6ZrAykfxMx",
  "key8": "5n7ZomuPMnwzbNsVot79GcNguTqSrvBTGCjNcMPKBvDq1cW4PQsBgkr6S81mbkGvyTtQuAogUQrN8TwNqKYnTBtv",
  "key9": "5emJhwpb87jgukVauCp9C4UQeta8rFKfNttTdVyq5V5kjAPfY9zyY5i7pgwyD9mjxPJiF779TJokwXv6Qd1UHXmZ",
  "key10": "4N6EJ7xTmyxndvbMGXBmoFBV1CwQPpkZRG83KQastipDB3kEYiTtHqj7CpDeHfmesFYSjogMVwYYkfn1E5FN7af5",
  "key11": "5v9WHd5Wqxuf6ttth3W1aMU8p5n67JzjDEZSDKiRvtydh7ZV2eHgQibS1AGv82tw6XKwVY1RzCyqtvgw7PTz5578",
  "key12": "2KKCWrkJLRz8vh6bezbZ1J6sbiLPbSeKXQA3hHyziqJsKy3H1HU5KJVcJvs6desE4Le3r8DbwTCTtxEkQF4LjuV5",
  "key13": "eUbDkV4sqap5YnNFBbymvgUUsDaHc92KHyJi69KX7PJg4E2mfXdCehB9srp6NAn93Brn3jvEvrxxXz3vw9tSxYZ",
  "key14": "BpR3zvLVsMTEJRPjDb7ufgEGVDn6d7rVE6a2MmoxU3k5jKHGk8XFBCBfBFnFoMCooJ8E9XhH65sfwsb8rCo4HRW",
  "key15": "44Kx1831yqKXLwArH5zJYvUbFXHJSgNJcLYoBetMXZHBTwHG5ouDhs5gYzVoAJikyqhHuUNAm4ktN3LC2zdaHmiA",
  "key16": "kQ8ZJoEwnQB2bALdodpE61RZEZJs79BDyfnNDSagFjF4zf823DHNpKfpXA7mKiWyx96h5jRHcWPez1S5fih845i",
  "key17": "5sqmsWwrfUSjvbSabHPLFggPL4W2dH2VEVTJxPvNB2T2ruaRJJ8qX5v3QRaMVcACET4v21KrD8BRxHaNiJCAofTY",
  "key18": "3ACFP666N78ALe1Axup7q6tLKa5owyUFzAnu9CoukGVBcUmYAaQB5VeXXoqmEqxrW2S723dNttxQbxPh1XJYq7rb",
  "key19": "3xnUgQDMnqfMvuzG2YSVCMTyx8dtcttR1QXSjjut1YtwhZbbaqqQWFhZK856FG9Kk3QVmDASodP4TUjcRg9Ptxfv",
  "key20": "f2VDfrhhnnQzZ7dMqaiocr9paGyuMfkDE1NEGviB5DngK9dSdgsVxkvG6yBYcemppCRno7tkmUfy8LxsxDYNzEZ",
  "key21": "8McDjkm4LWMPzRqjUWrR7r4jaDH1m4hBytCzgHZXZ661baA4AmyaePVCq8Ga4a51GPy6uyejuweJHjCtYZZFsd4",
  "key22": "FPdkrMUePFZbiDLk5fgVZUvxYg6daDxv9R6z3HRKS7GanpYNjbFKVLsG7gzQnTdk4T4Hy4bFTGHju995UpkDREQ",
  "key23": "58xYyxNUXuesTug3swhLqdr8Hjazj2wRyvJ7pN1Mt1Jf7qbyWEzdFiLkGEnvxmcqvnpHARYaroxSWvw21Z11iKvi",
  "key24": "3QLUuVWbTcw2duuLa63phT1EMYw28H2SBjNPan1at3ktC3vSXTckg2K75wC4SnukaoXsvnaVhaY8Dgtj1krHo14m",
  "key25": "2CMyYeavDgcM8SJCoqVU6vi1CrSo5ndpCoNTta4SUu9PiWiLebi2ZkrSKAwiMCqW5btRqzuxA2BPJRL83cv3MBBq",
  "key26": "3aCMYBwqJfzT77uQKopK3Hmm3sSGSiEjPgabvgc6CQBV2n5LazDWcDg2tenerQzvXD8D7HSx8m8tuiWZtd6PtSk6",
  "key27": "5FTKs1du1VnU86a81q4v4FypPviYvJwZsf4NEYfXCSQeindgW7nsjKDTBQKm3Wmp5n1wRnCYsXJ4Tp86vxvedVpM",
  "key28": "4PRhTyLdU6DhcCa3eZnmGoKLYty3ejZDg6F9rS4PC661cNQpPkk69zGBcSS2aAvxKL7QUtEic466uFeuGPyQFVVg",
  "key29": "4Z7y9ZGTMmEM5ukvFyEeWe9Chk1sphoJgeQXvQvXchfQMZPnezqnrFHh6CYsJ7Ltow6LyhXn7r23hFPdGYv3Egcs",
  "key30": "4nML4eNf1uC7KqbzZLWJbMwetQ6a9mHhqCuFjZZqkdBdpadvcCgsHK1NL9sxzKbMcvLuxRBr27waHBsByNYBWKDN",
  "key31": "2TfSWVZP31eGEAD1dM6fvRXm2fYMH27m2MVPsDaeEHe3LqrprgGUoXRPxZb4suFNQKFiD9pw3dnW11Hzj3ZKUdt7",
  "key32": "5anaZHkttAyrFFEDaGLeU5UDLBQswAqu79vGmT5AdJvnAhzHzcb6X4UvCowvc9EBZkKeZSMwya97xi7mYuWJuXdX",
  "key33": "38ToZaMjn8itAn39WaWzAe4gxoqJbeu4CLD9Xqf2tCYDQr7NPVE8MLmDjMEUC7jVSnKku575Pvjv3CQN5HdypEB6",
  "key34": "4MK6my8ic26MbHzKU458ZERbx96enNurdCqCqvvT7pnaLyFTGzinbPeUZHbM35TwdSXJpEjDNMjPw2sfYHc4zrMD",
  "key35": "5wmFgNjF3LaExf1TEuNRLDSDNEd1WH51LoEYVLsavU2wX728KnaJtp5Ki9w581H2bQxpuR4VVHMtjs3V3ziG3fBm",
  "key36": "2uWPZA3Q3WR4jQFqB9c9FV9SnNdZKPAa1Y8mkzMYcbdhEJZd6gzi7Dh5rTWScFBXXRHV9TSzvPa8qbsKiNzxDZyq",
  "key37": "2P41234aDVfAMM73MeyTg465s49APYs6STSNWDvuUD9qo5B8xNCXoCNpxhEHjTfcx1FfWGbF7ysNwbQogfixXRKx",
  "key38": "3yMbkU7vE4FqTgtvvSCikMQsWkfpCzZZLRqYcrK9h7qgkZVgLPMTUVNBdbqoQq8pw5nkAnpzKch4vNumazqJ17vs",
  "key39": "3CHzZvWFZL694sEAMFWQmqL2tp4U7Z7V71o1MPM6sZ8zM2rsYvWpufucjQv9vF5McJjLqo3V5PjEBXQWsbHgjG5s",
  "key40": "2UccTmy7FKXG7UoaMQcNAkAXy4CV3m1PyXYMTw412ybS2WVqxe3cik5DCtkTmyMYU7vaLkcRiAKwTVqj5SKmfKZC",
  "key41": "5GBZGiihbAcBb2KBMgfzD5TDgCnKCKgqY2WtWZdXJTsa9n89HgFk8Q2LFYL9pmjUeDgFup6dshCpQKvhDRJ1Sa7P",
  "key42": "39t6rfVfps5h74PJbf1x2A5ae1d3vuyhe1Zreo5dtTBwi7BQMdZrfxB3wiBCGoe3YGAxCXDYS8eUm9LtMKCH3nwJ",
  "key43": "ytEpWuLoG5Xwc7qTQcnjXVYYd4yswRSqs563UcfjnnU581sdazUeUSvXvTcbcTgNTYLWQXzpZBrQnthwqqA3Mtg",
  "key44": "4oxnaCTG3G19SSaLgCTZaY7zJhNqx4Fvw6s1iTrwtsGFQXvWHUbohSNqBTG2QNxZzxHSK6Qk2QBH4zHHj91QZvkf",
  "key45": "4iAZEYsp1ynSBMwmupcsyL7K6dWPv9D5FBuKhTFTpxcVD3Ry6H1t6XfSmUntpFWcTfsR8SWbwytwrk3FhnnL3zNA",
  "key46": "3YneRj9uCCbXVDkT3Wr8RWm9vyXyZ8D36P1eZ2F5EQiY9dvaPULvMz2Eea76k2suXiTPMRkrvg7bzMNpMWpgReo9",
  "key47": "5RpRK52MonHbDxEQJCBWAjVQokJixcJ34ykLbwT3n91UppiGPiRs8EE4kv9Kown2sJmiuKAjTNHERjcCwAvERpgm",
  "key48": "GXFkNNNpMWwDbd98RqKa9GXu5QUzPfyKTNiKpoutBVhok4fpUuDAPF41QDj9Vnd8j15icMeMiUVMYu1YK6GvPTN",
  "key49": "4i4wfTAU3Dy9mTbGQephP1q8VEqKSsmpWtzSWpRYGZqmYZyDs9p7ex9WmRjCUCCJ14uZGxdZGGxyMA61tK8FXX9F"
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
