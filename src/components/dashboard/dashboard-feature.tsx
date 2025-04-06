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
    "5HeDBf51PFL7XESu3dhQb3GhesKCr95qJV3gcTs7qLcYMmrt7QrLM6Ao15uEDJGdTX8vpXTkWoeFxWiKi3RyCRDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WC7jJSPrdmXxfh2SAoPntNCZLyT6qRdeNRZFTUu6fnhWBnhBngLpBb6ByorLhjwHWbipTuitBbX1M8ijuLUNgR5",
  "key1": "Cr6os5dh6ePq9DfaGstjrMuXygr9V2mimL8R8xafqMRffhGU6Z8BQRA2XidqGGfriqu58MXfZkmnkYZ8JvhbAbj",
  "key2": "5VE351AudDpzh4pLBsP74sUskfCHBeheiZSuUhm9vBhTpdY47PBQEX6zTwVpqLn86Sdv8T5hwyUj8WhYw9xAwWQR",
  "key3": "5W77mF4ta7K3F56GJ8WyXL5SZf1hCjHzev5FRDCT9Vtd3N86XLFjzHJaFL4HgwPnmmFKgRfmG4YiGwUw5DMngMq6",
  "key4": "3JmaCSdFjdEcwHSp95GKsyrbaZpLHhCKAbtjwiCoabfAK1tsG4Rr6vWtzVWiRzHcVU9dY2z4JDyYFKxDYvY8gJbK",
  "key5": "wZ3DjpEs7a2iS568tKFqm1uvbEFoLM2ZvKqvhmcEpvRyHGsuYm9QSi8D5LdMbXV9P8oJ8uicPdXZbKUkJ6XRwn1",
  "key6": "2ayRZdLJ4uGGJWMgdRiit7HfaJ791pTw9diDZ9CQJT5YEEy9GpVgPzAS3UAc3h44RXwLtyonMcNQ4cNsnwA8ycKe",
  "key7": "3CCUpzCxAqvPky67HU2xY8TW44JLR2UJXRdniyoY65AKRn3iJGUR1SVu39zkRsTE7LRaQpNRtrXxAp8knPfWyHAj",
  "key8": "2AJMj11hJJqWUSdn2jwZPE6bSvTofTbtDWw44AVfKzMXp2VFvrmxjE7r4hJHz7Vhr1XCE5efYJteZXQuwjwHb25C",
  "key9": "5a4KbZVcfee3TAk8RpkGKhy8xBtBiGAMYkzxwtji8jbbeWGAs1rHHhtUHVit7KiPsxyjEAKvqi3SrCgWAxmvkh5t",
  "key10": "3yt2usUtCbJC1PKGhrGt6sg2W8dGoWwsrnH8h8MyN6j8UWUUzaitwNqeAxFttGsH1vZLSudtAVEjUvkkQEfTufKd",
  "key11": "5pm952pvesKy4es7H8qRQ65m7uQXMscQSK8BcA62WCGvGyMUavuzo9TZK64CkgtXVWsrNuxFHiC3vE3cdHRGttXU",
  "key12": "4gEvL6zTsYqtYnVimRcsVGjDXzCFae8aFPU68RiSLqeiZjEQM3DKwr4wFVtqHtemkobsEy3W6amN11ws1kmAYVhJ",
  "key13": "5YBV9ZfXmSoicVBFYDuxpjz8ynKUuh8g7DDrRq6DxK973oCkyPZBLuoQ7DDKCwPCn6LPCxFoBR1eLGn2WS11uzPA",
  "key14": "6JwwX48yCH5KbMn5LZbr6ZefYww4QyiMSDxMw6KDezwyxk8a1EzFCn6zMwJkpMCLsPsh6bNgcdZo7nNZHQeiK1S",
  "key15": "2bFRsDys6Xeq9Z4SRuQ7tGSUaMoYXrLmMSa9pgLPYvb2VYUKyNLnCtAygTpaF1q57F7jBu3rFZ3HCNmi15LvsTrJ",
  "key16": "4Eso6f1k9vE7oj5khNsNYW1guiSr2V5arcmbWuzvaw7GWcBfVizB2G4RVpToUhsHPMqetkFMzEZqfGymxHP5D4WG",
  "key17": "2fkuZXvn2vNZg1WoaMqrLhiSVqDJFQT8S4bHgBANtBMovzoQ4D921ePsNQxacU6HEbHnAsKwtFpcbjDTRf3W2jbK",
  "key18": "38gUdtqpa1SFYYdCks7xzWPpHn8DwieG2Pan3jwTag1uy8EihftH2KnM5x9tmA6gvDh1jERRK7J3AwfLv5RbeArN",
  "key19": "5ELMWoM8QpHsM4QvkmKynsUhMrMTJ45KUtX4N2rm4G6LhnWxuZhxXb3MgqDj3LVAZLK1akagc8a1RW4XYbujixRY",
  "key20": "4UZ7LESrFdjUiWLusq4x43fWvwTJvkqBsJpRgviDfzYehyECwEhUbUmnBj3fuSC41cHdHUdWtQhANuGNazKayWTV",
  "key21": "2m44wmHQLpZpwA3uTca2vrwxcQeny1XvXw7M7LXLf1iSq2tr9L7HT4A3S3JAStYECqHAZWkQ7ZELib5xtwF9ssLP",
  "key22": "2ZRYptvNyh9ewWd5CdXx75ZoWgx5voV41waqjqoGtK8ZMULkZfhGkg4vgFw6Aqf53EqWX81Phf9PEsLgFaZvBbkg",
  "key23": "4yA6reSRmYnqFVr9pnNAF3B4JHzjqHczPhB1Y3vjyCeYqwtjieck4XUMZ8CmnS9Xvkze3Rvo6Cj5ofGJnrS5hWjB",
  "key24": "3ciW363BL7UFQ34H7kQ4feWqdfavG9HF93aa73j8wsKPJa9K2UFjJ7i44hbKxk34pxqBaKF1YRbsRvQfieG2FVqM",
  "key25": "3XXYZm7YZna5bdMsw91TdLVpPwzf8Agj5g2rQrbBDHV3MaFXF6BqmPotpUajx15Qn99BAztKJSjJbGy2BxuJi8MC",
  "key26": "4vcWdZHYsAwxyhTnQ71CR2Wr2z6PLdwKUu8hvEpm2Ac2sHaYghK5Jwrq4nTmdubgyJAAMqpQQE8g8TN8c7qypecD",
  "key27": "5iDh1mNrVRNoDBy9NWcTvNvj9QGcneVWAT9pv11gWmyZLvDvSTzPHnZ3xPzT3QYfrahm2kCoyZB5QEGr9hxFPXjW",
  "key28": "3o9Sm81zG8DGF7gqbhmT9LgPMjGjx2wtYUUe8zCsN7akWDRPGzNRCWdXSsFN7nyz9awD6zqe9L3m3urKtDodjabr",
  "key29": "2k7WAq86J1B1rxAwfLfYdjHnhxQVBxT6zTzJ4kbsaVYmxj5cUDrNJmGs8yqhYJW5rzHt7i6Xrv9yoLXRFAEBNWPR",
  "key30": "5c2kaNgi4bTxrMQHUdyPPTS6dSfqmDFybjFYRLyE34J1Wcnq2KMad3PmnMhBgbzbyKCeTuMBxH6LvCLCE4zTLicX",
  "key31": "5CyBq5c8hFovcn3A8Zf4onuhmWtusZp2BXkXHu62T7GLrSfShUpNCEf2Txi7BMKdV1st4N4zan2WjAxXeWbbsQon",
  "key32": "4cmN3GmqTpSHb5KsrPDnsMmHNiGAEDaAsT3aDipq1sUy4KaFgvvZGHcePAhqfMjL8Wwa3NhzTHee74zk8STYHQ7k",
  "key33": "4AScsJA4XsaSr3nTwn8oMfdykm2XR3DjDzQCaLt4HWhpvfmKTnumb1VEMg8avHYCF9ryg43o6Hx6SC3WRkEFcxLk",
  "key34": "5yXkNHusH4hJxMnNUQk9nceGMjbNZDBAzgcJG82KihLtQGZSMCtJfeshfF7shL9UoKYSWjBLY9NDh5PCbHF7NGtQ",
  "key35": "4p8TakeKWPNdba27vJN19BUCPnwPytPPPyfn7vrky26KJNqMksnGHD2F3rzqb7oUtN78HXoGxB92rV4ALVqR2THX",
  "key36": "3TPwMzMtyq1C23iv4Ju9v1NbkyCUE6Vo5fz4Po5hkB6TnD565MPJ72L7rpCTmzZo99MMhEAiXeR87iKVP8zAuouV",
  "key37": "5fzxEgnRzyTQS4QrRQ5ApjNTV15cnyJLsL63HvDY56g2jEJnMM4eisnzyQq8AZwoSCMQ4kJtiSDCWeBDTREiLgkW"
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
