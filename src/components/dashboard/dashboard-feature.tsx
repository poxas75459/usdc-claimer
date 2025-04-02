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
    "3w1w33cKRvpqE7ZDhJh1u1kUiutAEeCHr3dBAKnsx3fy1aLt3kjM7JaYptVfoxovj2Z814BLYS7RN2WDjXP9CR7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MNB1r8U8yBD3MHqot2XeCq3YpthU5voniksSXDMqLobJNW3xRWqRiH4aLRhd3bQj1RxiVwmdxFvuDUZW8Eb5fJE",
  "key1": "4uf6GfzhthjkujZBtvRqWCnyYFAoSiABukXUque5WMEg9QbZpKMgpsEESzC8U1NYopzsWVbddMtrm4UaLiN59xve",
  "key2": "4cRwrmDywFKzsEx9gRGhWifDvA8dst4LSAjBkSPdxxKRGcPLJByrh6Av5jxeKFrPp2kUxT2zmUdQy9bWgPfRgPFR",
  "key3": "4NWYg32tHmuRRVJusf8QhC3xHnzhKVr3xhALaysKfH3DgdEcffjXVESYmq2a6mKjDcGxsSJYqcgKJpNwcjiJc3er",
  "key4": "5tngvCanxFZK6EkcetyoemDrBrVLeSfbz5xPFuc1C8QKQr5LzkwsHhjeEAU5hbB82myGzerNzhDQMkD6fEWsq23F",
  "key5": "4essJC78SmqkTdZDyLGdWCyEbnL8j47bW14CjQ93HFrxgn4JTSKgT3Srr76ia6rrBvbj91AoApFj2EeoSu8hVuxj",
  "key6": "5rhWu7nKTwKRwB2sp3j1Pn8sQJ188yQFwqmmcoRmoBEpXWamDfBjcRAHiTma3rsKpPwkC4jTfEFN1kPb85Ddm1hL",
  "key7": "LtjTXPKeoMAKQ1diZquspoeVQYKdLu4McP1SsvVWJgPcScwKZpwfZcHC8gcxauBsjRwHKG9pWjnp7t9vKCXdxjd",
  "key8": "4FEMb7PUVmrQmRSZLKvH3yWijSqQmtRSF6g57prHq2vvTsJZJQ5prk2b2KSwXFXMLgenYLXvuC2C3gHeKYAfM5Fo",
  "key9": "2uJGfFWc2wwp7DcwHhZuVGsqQ6zuEje5hoq2KnskCVat5mpHiay7rn1tb1LaypQEBsvUBFcC4Z19cTz4XsyEtfer",
  "key10": "5Rrxje7JRCZ7SdNFxJdbmbk17v9usXqLZ7sYFcx7Ji985GL6jThSSea8hR1tyorRQkRZoScAz4KhEsJMaDxAe5vF",
  "key11": "2ugvewLGB8jJDrRncgReUdXatmfBnBHVeE9q5Y5wmDAwjboBuCLjVBmRwNdirXPnxvjuoJK1ufYZo319ZBjBevnn",
  "key12": "5dp9Xuu2o7ETAuSyGFAr8FiTuFGfzrDreSCWQv1uoC2wkYEUofCFGwSUU3RYiEDm8GscvRb1sXU4ECpqb68WWabs",
  "key13": "4BH4Mmm61uyXTjoVSELigm9wvz4q2GB7CFodqTbXc9wVw85awFADRKigRBAP1jAScUqBFaouev6EJsGGiWtP4XEc",
  "key14": "CbEN9Hqt7gw4c1H8grwsA5GtbRmhLmtmmYKJUHEcy8aJDFb4ebpCau6hau7E7wZLsXKv8MJpcGZez4bULhDTRhk",
  "key15": "3sNWV8ZCxKJyN7DXa2vwjXD1HjChMmdMWESUss5b3tMuqUnKjgBZq2EJbcqSSkrssyioFMsyUst7sY5644irrkLQ",
  "key16": "3f8wrjwLpNWbHKBb8RkYoi5xsRVGFUqNJrCX6p3F3aVksVjhnZaAtCP4JBgUBRKM6RJ6QLgdosjUEwMF7WEDgJjv",
  "key17": "5QUPyvWymG9FDstipQ2X8DcepQX9h91oeBHXmhKoXfiWKj9V9ce3yLKKDHXfqNeqCPgAwd8t9AyyNnCDxURcqZzM",
  "key18": "5QfygRoWKLjDX8nb7KfkbzGmpg6gBKBeZWM9rwTkuo8vrSgxbyna2zMXNKY5esLM4cqYy3iT4GmaUsyWzTTVWuY8",
  "key19": "5JZymatTnCwFLmQpLgWWENS5cVDAmWnB8VK4rSPh3XiYwMWQCFZGBxNteABmSyTRofK2AKmHGco9cvmCFssRv8kg",
  "key20": "2NbTwDDnSojaSxtizMrpnjUmMVmj7rnqLdU1CVxLjjYr5AibRXQE4EFSVSYfcbcS1DCaMkipHUMxV4Hh3RaikVGq",
  "key21": "xqb1HnVDSFJQAGgTUYmkpbjKk7ybZJN3RCBYajYFECmg4r2mjbAUWPSbpQvAwpAPzE6KKcRL3UsvhPAfEE3HFKt",
  "key22": "3gvMTaKsEcwcp9sTywYJ791bw6okrXujM5ijEKYGxwuC1w9M4e9etLc2edvtUuhmN3gYrcNuV6cKJawpeD5ZsVWC",
  "key23": "3rv684CNyvH3tUG91Bk8MZZwH7kEFLisijiWhjQGS1w9uqKf8MYay6F6kGh3NU9yUfg8FZioST93VxDK3dX6f5qz",
  "key24": "5h4qSoxXSuPb8ZYRNBw5XJZ8aebAWwiMhTHqAzV5bP3L1FUm7Y8w1TsVcHcDQL5U6WRcDVS2t3Fe6AxA49bwxt9",
  "key25": "4tmxUQpVmQvRJJNuLrAFJXEdCNjtwNzGxxGqenxELdm4AnBh6wjRMh3VbCEedRufYkBwh6k3buGGkL6rYD5gt7Qo",
  "key26": "4XTJm6DrXmFk9NFQ8GApWv96pMmy9RxyG7UNpTVCgueFD4vQrnkSFGEWvYF31b64yQJ3jQT3hQcV6PM21jqZsUco"
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
