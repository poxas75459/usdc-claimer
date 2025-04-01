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
    "2Fai21pbKpByK4vKuqPPvX9XchmtqQAtUHnbdwAWryY9DWTnoZVcCLHB7vzqHd52XWyENNwtP9vuD94KooYTgk4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59phXxSCFZna1G5BXLviwPfCrijpdiWDzpSDCwvYGAPNzUZAa8mo2ppdRaZeE5WEyHJBj35BwK4Ta1giH5rAov1a",
  "key1": "5qqQhmrRoJ8LRp8YiaEBEnDnKBKPyWv53BgkcL3574exLsbUGjqpoUPrb4VPkZRnkbuxdmqX1HRDSKVsHRYVUmuK",
  "key2": "8i8NDQiN8KC6QTNGusZMvJHRrwspzyoxRDfSckJFNQPrmMhrCmjecGfFux1jHic13mZCJURvTzGF8DHMEdpSVCv",
  "key3": "25aBrqJGqMUtHMbFXqLjQPeqsonwJzB9txwqk9J548EG2LkNDwGCCmgXJMusHqcLCNzAwQKerzXjT25UuZuCi6me",
  "key4": "4KqrQaJwJW2SmCuxFov7XKGsaRU64GWjaVJ24mjstYyFsQ67LXxVhyoXsQBt4BabwfdU7WKCJBDmPmazDkGWdpTX",
  "key5": "4F4vbd9wx6AuGCpEEHf2KsHz3cR5BBappGfqhHpQfJsGmtbCUQ2ZR2mGjBQRcwzZkdHDG5WLcZfizYt5DjjWWdMp",
  "key6": "5fG4goEBDxV1Wjx1nQ1K6LfNmd9ippNpu8c6zNvJa6Nz1QXANuEUEptvCZCZHzQYspbtBtfaWjLKR6wk7bqWDMjz",
  "key7": "DngtxoZnWVWf3HEGGW99J5fAbrX3Wdr1WU7F6u8c5w6z8XDaxRmtwbgmQv6DVP1Xp7umZMGHY4MVZ4vqjcymxGq",
  "key8": "5rGRYXvnEMiDp7SoGFd4wou9gmnEWdYrTV8FSPCc7tWgP5jSLh7vLvDopmfTHN4UFCtEsAq7zyqbmcLkBHAK61BY",
  "key9": "4zuyou9L99EweQFBX6A6RjLojHSG1R8BoQxvNRjopVV53HaYyfSbmtY1oByA6iB13yBg1zDJYE8sMVRZRynJBpwj",
  "key10": "4GypqALc4P4BwH1RNrS5aW8vLvwgHpo3oPmKX45dBLU3aTToneR7MKPiNtNFJfe5xsme1qnsSSRgKbRaHWesbHHt",
  "key11": "63HCwd126ZA6frtnoTUKgjpd9LPWvGhiLqpZXd3os3zefc6g2ujUifo4W8CGSQ6ipvRQfbog4XtzbmJbqxFJQ5x6",
  "key12": "3SLVEtaDHuwXN8ZDeNziqt9o4a8fiy2SWj1jyP3USdL1oDmkUjsoaL4UFU5W6H2f1VuD1n98xp11BN3SUtb7MXG7",
  "key13": "3fD48HQqv5NfuNpgq8BLqoLTrGhkrcXDGFtw3wLxFerK3gNhbmn5E37tTyqf9TgrJkmfP28c4pmKCfW2bjVAtCZy",
  "key14": "frdNuN2cvKNR2wBBExF3eZuLPcJDio97Rbye5xBbyiqiiiMvf38DmfN7quKiu5hqWPn4AA7vpuufzgTmKB12TQq",
  "key15": "3ahwLSGPCYWMSTywtgayV6qawPtHXYEiWAN2yve2dPvappFnUEELson5c4mytB7oXb8R3LPuxnv26pA3ER5po8T9",
  "key16": "44XiTL75Wef1zM8un5M56y4QVgq7qeoPof8aJqsJanMu4kiQJZWkoTfq9WBj7DNBCqDGZW6JnUK6gNPJ76M7YC1a",
  "key17": "421hmxL64KA26pNvVPd1C2uHiUQnuZK74eirXgioeTJXtQ4eK2xyqFTT61Bw6gBHK9gr2gA9qqTseraZnYNqwk8d",
  "key18": "pJYeyJnBQSUDbf3bnsZrYQDho8nfYqPbQjzkXXLF5q6xi7o6vYZMyLJQgpNQHtKZwcC4rGs8TfD62GwLNBFFG5w",
  "key19": "5mK7HoJDChV9MEygm1mYX3CnxJNGZzeaArsmPEH3JbCW7eLQSZz8UzzAXcRbpAqurWQG5oZyKbRkfULRY5NszvDg",
  "key20": "2AUUVJMT7sX7CWSojfVNn673DX8QzSSsYicnebhsu2hTdaGenGGcrXJyjRZ3rCvCHiepQ837WS1m7C27rMc3ap4i",
  "key21": "5yicQn3FUYrCiFDTtbNWWUYzkWUaWqxcKAPSvVwYphZaGC9fMBWRjNa9HkoVZ1pmytxP5S7PqNCECQbZGeDAsf2V",
  "key22": "5R2TJ8L1PS6RLgSn5vyc4DAnyTrJ4cngLj4mY5c7Y37z7kaies99F17g5ZxpYjWo2gBs7NvHvTz8KBazVwZqkwJb",
  "key23": "33DmFQ43WQpSSzfzHJ7kunnhPpfaSywZjAf74kVma61nzS57g7HSuKt22WNfX76tXc914teH7AvXasW6LWwJCkkv",
  "key24": "5cZFBGVf89WE5wPZqi4yKVXqw4oSdDGdPXZqzXa7NNYpgtyWuuenjyfkpksq6xcGy8mSxu5679ZGJ8S3wYyEmktE"
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
