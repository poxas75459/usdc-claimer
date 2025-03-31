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
    "hbHdWevWSWvqxZXftDPeEaKgQK985FmHFBF2u44YmTUknfc9Xkje6DmuMYSYyFS9moppw5wdH3janH6YMd8Y8gy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WKFsZpfhCxYWST4HB6xrYwdAXWAo16jyKfBDbrrgGomqUEwC5QkCJMoVgx7Ab93Gxt1qYpxv9wb4tPh2CPTbt7G",
  "key1": "588ZPM6KGc8E7txS1gXgt9YqkVJibnqzMXwJAQC2vmN4BWVyn3f2rRkvtNRFT9u3DiA8CV7miHLVkfBNMGHT3Y69",
  "key2": "3oMynYdKB1fmViwFtHm9h1pVAedUjgJPUhUk6QX1TVggfnaUX5PZWgb84heVaf8LpwrMu7nZdWqipb9B4pmMy9Qg",
  "key3": "3FKTPM6nfB7zox5fMoG9ZwGxTGs9ca4mnZr8jqKxG78QZEhKP1ywoXSg3EsM1TLw6pH4vqdmgrTvQ26fovbGoWtp",
  "key4": "3X41drn1BCsLaEUvf7nHPHkV6ajYPGGMJif7m6hKNYVJDVqXffYXZvrwrVECm5KXpePFXPASgkV6tahQaGFibM3L",
  "key5": "2Dho9BUyAXKsMtXtm1ChB6xrE8xmy5z9dJC8bLTVv7t3RYK9vNo44WyTMEswWq2Xv57AWmTfkgm7KfyTnrtDv43w",
  "key6": "4bRmkHaEqJcBFpvcdrG1c82gefQLyrbdXMp2x5SaKojt5ZXAyLKtWpYihwfgdC9mKzAEGDHtSta53JqnVRRDk2Pf",
  "key7": "3df4u5s3J4U8ymoR1U9qmvEYJFCbhmeKvgLeE1PZXAcYWCa9XV6iBkkn9HYV8hTSdKtgubfwAemXxL7Zdkumnci9",
  "key8": "44BD4LwKbRAomitcJFRDfo3rPPPZcx4AcRiAwonHMkPS1MbzaW7M11vhLui5gAR2HdRz6EExUdrTKyQBwTHwQPt9",
  "key9": "3A9wdqvRTmxQacpdCuSrHQMkfCPLtYaxFBDa6V2mSDBH9UE54q19PuNiCmfVBX5RhGZGN7oMscMTQjvFb6gNGuLa",
  "key10": "23NXSh4Y753Khty9zcQJkfVVqvVHHkshYqs2NjQPYjNYMFfPSmCb26ViTErzvqY62Uaz2EFME4dqLyUy2GtdiBr5",
  "key11": "4Fy733HjQRcicbWUpZexYsPhfYSnS6dARVHKfHLosYtu5k7i4vBri3CqpnqfCaSgZ1cDYnBJPZaK9Za7PAHRecE1",
  "key12": "56nJVcbCxvpVfsAD7K6DMRVsJjyMk61Y3MNxNJepyroMBrsnovMcFC7JxA53BRkPni8djzRb26PKoBLy3B1TicRJ",
  "key13": "2D5FFX6WiG37oqfvTeDWw6TKZaAQoYh8HNcAyhvNC38o5roSJ1DMKQQ9TCiQnNyCeH47xfvCGsXeAaNJ9Ahid9aZ",
  "key14": "2um8iSh21MjxoumcJm7dC9XqVcfPS78apJJbVSHSRK1u8N3ixfgjMcZfkV31DvM6fDQuX9bT5Ar2hfSFKZZ4Hw43",
  "key15": "Mxhg3RbxGaD3rggBkoiy4NWss694NaQa4bFddLY9EHqYhZMaZQbxWTMbRU1uA7xM7dQAxHMdd4jBD3BFpqihBtG",
  "key16": "3G1to6xkvwxsdjszEyFNojDX3uG8fstieM6SQo3qkAmxpJtHqqkGAiLtCoN5bGwARAoh3zapdwupTZPQYrALAmxP",
  "key17": "43bebtWyNS2GDzkT5iZi213fc4ZJWoVuiwsW116JTxydMv4dYEZxNXFsnBqERu4tAC5x1HqmoQnKidVoV6WoXjdx",
  "key18": "DUgfaDpSibD3sPYBrZoXP1K15RXhxPmHoTvFGgetcsi5m6amtFTpJ7mTQpPZyS73NqpzWmDXbo2dzRu2wGoECbP",
  "key19": "48uEDPe2VSFzksrWXnuDV5riEH39n4QxBUFG2KPFyzh4LiHJZn2fE3KxYXL4mkp1qykgkkUwHbjUE1zkz1mVR4a",
  "key20": "4PCpLjvBAKbscSe3geLRBqsLpfCB7qbqLAdQas1UAozxodKsGunUncZkEcjuAfFCRTW6Xx5YGFvSJQpxiXDay3Za",
  "key21": "2ioZyywHF1x4Pype9CqCGFbJK5wKME1qpLhfYnjneL1kVP3qqDpEdrPpWnRpmY8j2Cfy7Cg1G1fDk81ayKZzJdHH",
  "key22": "4uUGdTZ2PgSnSzgPZD2iK6tJvzygNUttmUQasokWuHWL1jhGH8ujatzodFdhXyWA5Exd3p6fwHcWt5kqJjNYsEh1",
  "key23": "3Dkr8nVTQmLVWuVqnL6w4peKoUzanKLNbE8XRE9h7igqo1UWythxGVUfh68Xi1EmaAmEyfUBAnYSRsp399FTE7Es",
  "key24": "yJTd1E1iXcNmUqpwkdyaSEKhBbwr4x9LwxuQf7xPjJESg6eznuhQ4ymvoE9cwko6KXMvSQ6r8Cq63wk4jrEQAHx",
  "key25": "5pDypG5zoowXny3WhYYXY5L49q7gh2kjy6rhw2W4wea2fxkzinoUZK9CUsMmEiFfakvUF8vFFvMZhw91VAt87Aki",
  "key26": "58acnqBbrYy4vbs5YFDkMVTnnzN82X65GA1G985Fd41J3NHQbZE4hAhXX7iqRfpk35cPckzrm9wd7SEVPKpKxVWS",
  "key27": "2nYCEt15oD7Ua89nkuuDavSVw21yUx1DPBKTqAYGUauK9ZB1RgjQL6uzBVphJ6wzNyTRXg2H2GD17Dwsrxc68gv1",
  "key28": "39LsfHaih5TjCgQNUS19ZQvXaawjrYNrpY3GvKSfXmdrxpJEFnfnC6XVj9ZHFRHAbtLg4k71Jx4GHTqT589Ac1YM"
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
