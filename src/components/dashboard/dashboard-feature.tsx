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
    "3Fj3saekLwpwnPZ5Gw8Xgs8vF3Y2pT2gcC8vvMn6VixHuNc7xX37Chvg6KCMUF8Piw6VvejAkACh8YBzQ4Vn8zTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FECGp6GoqxuPZUQn47kd9kkfUEcf1hiYpZFDTkT9ndCHfodQSpSmt27oP8mDpScCDyfFDBFtaToAHeFUfFJSug",
  "key1": "56F3S6X9KXYE5Bx86qDNpSY5FYuRYc3JxtBfdEZQv6bytzcF5TGTgFS1uX4TAHtMzQt29PGp2sepwiHgNhL7aeks",
  "key2": "zZ9wbRPbHQGCp9bLCVXgfdwe558tZVW1bPFGuXoRLCssAjkwuCUaWrJKuAPPNYgGZqYft31zbXoe8RMSpLDquax",
  "key3": "3SP5E4cUX1268e7tbwDVBmhFRNqNmgN1KrWuagSDqXHcPZbjk8N932PeQ7HyEcFD9NY52yQRtE8DtvxwnCaYbJJp",
  "key4": "3QqeFAVn4of5GnRn2muEcoGZ26ZxpSZ8Vw6Qiq4pg3KHLGRQzfymKNsL8M7kNuo6UHTk4Agp7e6SwkMaqFddjZYt",
  "key5": "xUhw4PRm2zh44V8yZHncKZm7ho5SN4nEeyrBe8oidYbQcRTMTniPgWgRnSzP9TDmFivWytir1pDMKNQ3Xoz5v4s",
  "key6": "54jiNon5Dfu8FJjG66zdCHREay6gfBZauton6vN9LBGFfAJXvdDe6sujJHVsLbBE5spgJmJXgxhixeQw1zyjpt2V",
  "key7": "4DStDqD7Fh4ve1XDNhYjctnkPesEgMXAUKTP4o5xtYX8Q8fbT82gERT2Xhsg11Btt3JZ9WiKbetBNRn2iqYo28PM",
  "key8": "NxVpqSnCuGMfRsBkN8H1RHhAZaetvZvznnbHYpNdxmKZ5ksjevBjXDpcTtkUC1NFZ5s15oAz3R84QHVhfh8TZ8a",
  "key9": "4vjjjuzVdq8wMMYzUqnkPg74oZLXwKbtgQXwbJv7LJ1WQjkEtnDBiVQLa1cBw7YCEjoTtjaMTD1S3iBRC6vMRtfZ",
  "key10": "41hiSa7uPrC4gxyTMSJTvnAcpN1m3Knc5hz47vrUrGnGoR8G2XPJ2NzKt1bFoKL1mzex4bGe9LfA2Qg1EM1uZwzh",
  "key11": "2bqcdDBw1pW4B4i96M9toqGKEym1tNxwG9ziuez93u3a8GU7qvuPxaq5srxf8avebywLEPjz9LeHtojGD7Gw8Lns",
  "key12": "2HVYKXbmdMoMg56ZwwKidw6nn5CsV7k4yS2mkqwpy261Ssqr9VP2DLeVpo9XZmCBwE299qxFUJnPjRQaUwzuEmy3",
  "key13": "xsB6HkjzdMuafjHmTWRLDxGp39qN729vRm3BzNYHvia6BgALgAWgMi33u8GMZaC1WUt4pZaLBH7W5HqPaZd4CBY",
  "key14": "heN2fNKms6NU2a6jh6upsns1TEissfgxKequN8Dr8A1uLSaswbCXDM2cmEVehQKnet6AHqeCSKsSwGRmEeNRoMX",
  "key15": "3U17zUcnSZRtmLnJzkD1HJeZ6PxTsxnYDLrcwPghXWCTHXx1L9bXc4t5pCihDHmHhWSc2RJprwqzz1Ps8QYCAPsS",
  "key16": "WingiB9PKgeL2RZPiBtjukDCeoy4bBTkMZmaj5U48qjiit2NjQcTL5VnkenCHNzEdMRX1VPNu5FFCVxBUNVPCr2",
  "key17": "5RRzCRFv9sbuyaCGsm11khnhkzSeoeedhEpbEPj5hGtmuTRSCfvBhvAXJNd2M7p5q7YXErq6cRZKyrQWcrxVGAx1",
  "key18": "3V8e9dLDhHjFDop37h6wHDoL8AUtnHFqFSuMuS29EBhgqroTtJbURrBoURcGAhpaRzgCzx2ry6o34n1pyEy5bCiv",
  "key19": "VcTjSP7xVRA8U3N5Pus8uPH6wJDe3rYhGVnaqwo6mg7Y5nJPANHt1o6nCGcWafHZid8Wsg3HCLfodGmEvYBEwyn",
  "key20": "434ZgSW6nGWWirCrYRGHjXFBnQqkYgtwsYehJwhi8AhJ7DqYRrp1vrEZoddCngQcKXhg5YNJXQf7ixmUmMard8CV",
  "key21": "3yccuUS37BzAUoGxvxXj3jTUSQUrmDYMQzu82Fw4DfhQUr6cLdRh5AeYtFkt3exaaPrNuR22nx4wETwjrj9iYPyU",
  "key22": "3K7pKuJLB2DwBJA2s9hzcY63T17yRJDkgCyWnCKtx3qmvQwd61L7NYCJrbkHrvjet9Uf7GrESZ4ZThNjnRZJtRzS",
  "key23": "5KrbDXc6cQXWtEYGFywj9Hg4UYY7MKPHxF93TiXxChauxvSCBYwPjrVnhoqWgNesS8TBUXZscJYPQtDrGQ6QmBK3",
  "key24": "EQhUZtejqPuMAobGVZ8udMM5bY6SRvNtVwfoGe5Wn21h6ehtt9JrdVDWjdbZ5Q8oo4QWjRNe9pbiUBxPFgYHm9Y",
  "key25": "33HAgxqZUg77UeFcpeTVPvsSvkmvg7aThapJj9eNeQ3sXLZJGf5a68QbJ5whWp6fF5gHTS36eAmAvorCUkLUpwHn",
  "key26": "4G75ukwHxq78uiUjMxZqtChve6rKjhU61KTTz5nbTQnSJnvq9imMtp3b3DWfo59NvUW63emrkb3Fg5G8x4PQbNFm",
  "key27": "64kDwifoSVrmEM7d4MDvtArQWJWhFPqLSJgtnfMVb1MepwkdiR4TekJejZxtJFw6Ps92jYo5ETUUi3obctXnW6Ti",
  "key28": "5AdMBJ9qxSXFHeVzj4C2wB15HBDBo2AjZFNd3KzsgYna3atejd3CWKV8thbEDwv2S6TEN3YfwVXzpmD3crr99haW",
  "key29": "4cDEejwz8CQnVE2V54ew9KFeLbWTw93iadfVTDAXrws19k4sDQ6oUmZdrgw9nGmnPHRNFNpWQFTcNypmk9QQEBHN",
  "key30": "4h91k7kNtk5rxodytQgKVGVNxVC4h5KSR85zV4tGWSbeGmFkfQT64V1PDvyjyqfGyQhsYahffjyKsur2hmrCfTaf",
  "key31": "5VmDAwi4sA5Tq2Z6C8du8UdTWG2jnJ55KjfkxTxakDLEz8Fb6tjDJS7MpnZV69wnh8CgXyCuvBnSf8Z2oZ49F3q4",
  "key32": "2fGnW8SL5BRiEjJ1r4rp6zhzMDEk3rXKGtbRoHJFYvR9LY7ktutoJC7L53bmR5AqtNmfvAJpqNBcBUUnsx6vu2Ko",
  "key33": "5VjdwmUbc8WztWdsp25QovYifNyc7i2tzwS1yiFNv2KQrtX5JAkZc2LusG1Y9o8ZhrYatb1tqnEeM8cHqRLvee9V"
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
