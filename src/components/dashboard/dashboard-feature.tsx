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
    "UtVLww9sgC42rd5wTSj3kNwhaJkMzkFRdhAHYjx1YEFSEHSpiZKNL86aY8SK5C1XfYgGorrF7fVKwjuguzng2ig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dX4ucyncSbbou7HBCD5PC9XoxFXx8GBptoqMpk1ioztThnDBeadxX4rYNC5djKgVnc4r4HNp5auvMFv5f1n9SwR",
  "key1": "3sdMJJv5vfPrNjzmXsTvDGEYixkEYVXFntJQjeYE3pmRQRxvEtxpAqvJ7irtUpDRF5tDKAJfBSXJ6F5oESGFeu5i",
  "key2": "2W9K4jHddQP3dTYu6M2j164XCfHSjHo74gD2ZfDm8u4Hfnwuf25BKSUSE86t6EuUgwdgPWsemmMq3UhgsX242v2v",
  "key3": "2tByygNeEAnJHJoM51p36GPzpo1qWaBs9rV8jeFsJXFy7ojpRpqsjdpn29JaMb9UMf2AXL8SiWFhEUKQDPkwU6nQ",
  "key4": "5tN36GXiAvkXSdsFxBapck1u94YFDv5ig66GZTYTiFLJDuSZFenJyNPnxwVkDbSFoHVhzvQ9VBXUimQcvQ8SBK3R",
  "key5": "91sfGEiotPbAH4pDr92m8AWp67FjW1C3W4R5vmpeuJp2BJdYLdRUoCgCkAGtCVscJm381EhRMcyjQCKWfJSfUqh",
  "key6": "5mjANueUM9x5muj78PE7ZFZwNLjeQVczWzq2s52DURYAhbtDGkoaPPyJmRCC1A5NVnqrgGCv9VTSwFKNurGdDzzW",
  "key7": "3qMXp8rUBVUWb8ZLjKwujzr4WgLptHZuTV9RMGmKBeNShcvjZfbWttG82b12egW81rWR7k6AuCkH6DPbunJtPRNH",
  "key8": "5eu2vLeAGf4iqpjPy4wee3WpfxJPnadgD6g2WqdA16jECgKLK8DSyPSxLWjtHxeEuW8e7yZa8HP26h3PjdYt3ViS",
  "key9": "31aNbT3UQZm2aGQ79MibbxHcBvBAjcxNadtiTAkR5DUF5L99DuSGjQ8bjA55U7k8WKguZTSPw9f8QDkK7eeqSUNx",
  "key10": "M334PQqjmB9yf11gwq7om7NkjAqhDsTz8oRhYv3XZyU1h7WUKqLsAQcy3c75LNf3UbG3nyRtPh2PdHBANwEcaAA",
  "key11": "4V5HUeDyFUiqh4Smprcjz2ds2mB7GUZM8yaLYXTd6ebsKJisPY9ZoDJFPZqYpkLYCauQ6qXXsEccucyNQxxvPXhT",
  "key12": "3DGiaagKAxgjutXEF8kkPEwjfPzibaYQcBKF7NAZkm9eszX7iZfqdDAEb29EWLPs9QEN6DtfVwN49aEvYr2TXmst",
  "key13": "4Snu3zPK9h95u4m3YTAidcg8hshkhFCW4GD12cHk8vpm3PVqJ7yJCuKgkJVtXfLUeqyv3wZvuFa8qeasUqmTbBNh",
  "key14": "4YMxQof9Q1FidSbLE8M1NaUt3MsUGofWhm2S3xWNxnfywepFTRmwknNJyRVFeaaFe1n1b4hdN4VfH1vVNn9h9STP",
  "key15": "4q1Tk8bmbA4hFYXg5SRsjn1httByBcV9o1LDCd3EcncYLTJuUYyZRejuyERKSun1TQuDUrXeLDVzQBfQJ4pxhZzp",
  "key16": "5fN6ii4AozGnZtSex3AP7XFeFQFZ3gr7cRpGE7XZFSXrGm6NPLrf9n6EEaHdFx9RqfWXfmsdDu9FTJSU9mcncVfz",
  "key17": "3sm2gYB1T8EmF542PsFCJJFyp2SdHibccJnx3drks4VaTuu6AcvwxMgf5NT9ZVygy44PXUVJB88Gw9LAG28BBXq4",
  "key18": "3iRVrfGNLXj27GnfD4g3UevhbWbQdyJHK729zoujaXgQ5zfkMe25pwWj8GWQBUoimQwircqMWMcjwkr3BTwQx6D3",
  "key19": "5WVMXSyF1CUZqg1yrs1juaH7bZmJ6svfhajPmwujXJbKkPEvyyamHEsXvaev9snzEAQdt1NZrxGaBd7g9k9CKTHp",
  "key20": "4b9ag3sjTPQK3jU22Tn4iWEi8Zb13DZMfBDhkeeGtvkhFnR52hyZUSRTYmQM9AQgYEeJtAKk76fmWGSESqf2DUhH",
  "key21": "2djk1WrNPWiyXWXRUpKVSGXy9LVMMDpMm9Qpg4vQQt13cFnqJGkZz18aXfhuuEDSZwth7TFamzYUN3uziETiC4RM",
  "key22": "61TVMYJr3EcoJijuWwwATdFWSU3wEquM4nhFHALqUpUmppT6N9Ujje2vBtMXSxxAViPcPpgYqVTWhHkuJSoThvkm",
  "key23": "4K3vw3aZSUEFQHFzricYwhryMVadhzfzMKWtAVBBf2psjegci64QNUm5Dbd1j2xXo2wTwxZisst8MBir7zoPRq3Y",
  "key24": "2yCbTjmvX5eKAtvcLSSCibnALEZe2xYSktD2kEkVxywxagQXoRtYYctuEeaQPkKrTvH4oaeVHMfGRMK8rzVTnG7R",
  "key25": "VwG5P5rmKnqc4ejsGmAYWA8o65og1R1T7atAxPaHqaF36m93BrrrA5WnKs29qqXwAMXiN8JoW1jbaPNjZwKaZXB",
  "key26": "4z5cb7f6PaaZ6x6pbTQA3PnmH9RUcUHhQEGDEMXyoRB4NWysYTho8gdgtZRLKfmYLdbEzX9DHFP6dPm2AxFeP5v5",
  "key27": "62kRdz2tvrCFndEMQckiwbiptbVRbkbB8xJLujKSepqJY6JrJb97QALc8VvKM5huezoYghka3UsBQiR9JC15L8nK",
  "key28": "21dZYzo6A2mgZ2RdUiSTZdAwehHEU7eZvzYeXFmmiEQYmCPjCEbeVNvVcGx7cDateWujA53RDxmajYHo7h9PW21T",
  "key29": "h1Tsqzy7S5u8PYSrPkQjYnPSsmPsCQAoHCVJKtFrno8ZXE6qxMVKubQEEh5hL9iipjSLz5vNFdVvSEWNqcBszC1"
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
