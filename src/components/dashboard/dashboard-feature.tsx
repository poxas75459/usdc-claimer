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
    "5AnosvkhWu4TWsQG8pW9QEfEJuQm5o1oHdgCWuDN5VtJQWDJpkUCmdeNipY9EQj3FoNoFsikXDcpufp6zGqzxhfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EzWMQau2X5AV74DdYgakumZV7wWb6xXSVws63MuWNSqfKYggD1Q4b5u6fAszkUAXHUrETTvtqgBP7fb8zuVFP4q",
  "key1": "3fBKjYPXnJwrGPaiNaZniRsVgkHFc6Zt3LjRL94CVBmoSybVHQAkssQtkEVRvN3X27VrZZDNrQyP6Q8vt2vwKxCq",
  "key2": "RXkvPHE64X8fUiRtczjwij7DQFC3tQ3c9FtASJcyp1m1L5dHRCaNMTw1fuQ6QYBvnXCY4dR32THMTej6pnX3Hsh",
  "key3": "2Z9W3EmThDcheeckbj7UpwxShGstv2KKzZscQuQU6NzQnKdQWd3joSnSBsiUx6zsPLh5yVCW6Hmhcg4mmJYovvZA",
  "key4": "4FPajMJjxQ7VxZMLGt3iG1r3xan2B7CzQezV6jcjzpUqxK6Jwp9LuTrVoZ8ebbqVKiQfsmLH8bhc5LPCHL1feUys",
  "key5": "54C5fma1j1v7g22AqMfruBnewrHFLkCemfk9G6GmSPmpHXhrHcN88Zn1KUPE4UoHVbqru9BMo7HgGFP4k5XzWvDZ",
  "key6": "67U6mYRTafuGPhY95xfhoSDnf6pvjoQmLbW6AizXsHsU2RZqDjmHthdBo31zAmtB6rLBzJZioXojRPvoqda12uQw",
  "key7": "4F1SSFLvy2cG3RE33rXaycwRZDPwjnLsyXu7dcxpHcR4ZJCV3bzKXrZ4ReEZV1ZYNK8ZpnbydGJu34ZSWgWLk8Wj",
  "key8": "SbNNHGqsGZJyfv7tCmXMiCuSgtPamthQdDAjb1hCXiUKbodzmXP1gJStzJMe5F2vajZhZDxpuFmns5D9yxqMW3e",
  "key9": "2neYxpkuNiahq4MgqTaQd8b5ZHFDHyggXYjbQKVJthaVQveaoK1NLnFDhPqAUJhAUMK65gpG11Qm7hBjHptND1cy",
  "key10": "3z16CN6ui7exx1SfBaEtfYJnyoCA2k3EBNuLsfMMHoTHC7kUcws7DN96waxUA674Lm7u1yWunQE9LebgMhtmL3wz",
  "key11": "2AFR3jycr3hC7PmK4WGru16prVkMM5NqwtB73NHv4FR945kbzje9BVmwYCU2Pw3Lm3W6XZZNTBohCNBTrap8dAHY",
  "key12": "2TeUvXM9gw9WMeRqtKXhFxMeQQngZ5kb7qL7cCXrZUP3avxdyJTJSgvK3dYqxnEDgay9aKxHBsBEj1E6uiitAtDd",
  "key13": "53bH2BrQY2yRgwCFVYgybTUFDnbYkrrKCrDTwJWtmhkg1Zb8tRrtARTeArVEzafB1jw4myhojiaeMZ5ctghe1puE",
  "key14": "2wcKLyuXERnqmCtGsTWChMxxmbq3yRPkyWKEnUaEeQvYdvd2prni39bcGsedYucFFropsfcU6DijWJTRosCRKUHh",
  "key15": "4P7U49M8uPrhq7MeeJQzjBoYWk1p8niovQwSM6ahwQ13cTyj8iU8CmNCRqk3XrsD5MtVU6AHf6J4dqNvr2zmGd9g",
  "key16": "2JssSEbnHpT7uCjd5etXCkRsfyVaMo6xQaNj1ZzwbCHCG5w67hsqHS1HGeBD62A9cWigNHzvyirK6rP8s1HiDQmD",
  "key17": "2XVfeCwanSPJqqF7KUxt21zbzc2rKM9HN1zh7KPQ4zhwBTRaBFthcw3yemiHhbVtCLemHthBzjf67huTNAPK8Dtp",
  "key18": "3fEigchjnC8PXdQiDkeQFHbFJ6dDgXo3YavR8NmgdV1GiuNyxu8PT4qMUVGuWH5WCtrLhMpf5dJHX6q7njuLBcTk",
  "key19": "35SZAxKWkUQZF358qE4MLRCPUTAs2Y1V295f1RynGzu7Ev6NqDvBeHhsKJDPegCoN1BEXMvKheEaj4KPyNRZC2Ea",
  "key20": "3JMN1PZiqnUJbbXCiXhMULTiw6qkhH1EUtwgAHoHHME8PnNneKao871hy5dyeAPFvzZUAJc66eoWYhaS6BDucLVc",
  "key21": "3PKt1RyLnqiAFdCmMZVodRNZJnBnfoFob5C66PfUJJ2oKT1UyxQHCdy9CMcHptoSbGe4vonuiHsu67fw5nYCnjCa",
  "key22": "53CxsNXPNc6zFYqmijEEA2WjacyZU6UCJ6V4b26jpz2xubBP6gL526rcEmzvtwScgvU2ak7uoHfsmU7Asi7P3An3",
  "key23": "3nWJVJZ7AVwPrrZmdY3VXEvVkodGoP3gF8PtjAeRaU3KPVSpFVwrnk9pqKGtTkFBGMXFPvvK2KjHKPd2R7FVk7CV",
  "key24": "2JPHfDFPhjBZLE18yEiMhkWsYi9hTWD93mEPVZhKAKwK5GstCvmUYonrtf3wfyFSSjSF2Kjn5xP19B8eJJvyQQhS",
  "key25": "2BDe7LgG8ebvQVRfYAZ6ZYoqw4QuaSimBkWR3ne8Uehf42AgE6hVz7WUREwwaRiqDhC45axAKqz6gvBYPC1cAU3p",
  "key26": "4cTvy5DV67yTbuJCcJeK72TqXtfVdQUvs6sa411QdCDaJBwGePt9iGQ8w2fKU6FKPXGATqtDSrEv9nqZ6NzWKXfC",
  "key27": "3nV9xkB68xwrhbBAuCUjzDXpg8NmFEkHLzZobZVDKaLvUbYmN8PKS37MYrFc4TPRKjjXmgqPX1aHxLRqkFR3mMeG",
  "key28": "5zvtmXZeNawHi6fVrktUwkWRpo7m137qzxraHLkq9tMSjmgLxsuceCFC2ypsE8mEMNkSTVHVEYJkZW1sqnUmqASL",
  "key29": "55ghfpvFDhRAnKR5gzcYVDhdzGKAEA7E9GNuhz6nQC3dKoj8AfBaALxu6gkprvJqVe5Lj8XTUY1hFm4VfxZx4C4w",
  "key30": "rWU8o6umdLn8dFGzW45kgbZx7dko6kvbvdbUawSRQjJjsk65PMnaYNQwLz2rpX4UB8eg6pHkGfDrdQGowjjjSGw",
  "key31": "3V3rrQBBcFrjpm1fkYdc2xULx6yTHAptXWXEBESmS6fqhL2tRyw29QrPVi68yaRKK8JY7Ee6HCJ5JdjVZhHBb5qg",
  "key32": "5J5s3118GZZvyEFzXyniggeH1HVbZ3qqkFR2KsuLhegrkbiuycNcE6P84WKiwuP6pbYqeBv1XG9WP5QBcFRr2rVN",
  "key33": "ePwFV8ejq2wboKoeFgPxDtMLKSh1dQwWk8fErRpr7zwz326vk4W3r4nMjL9KwqBcuRGXNCcjyp1hqSfFvQGhegr",
  "key34": "gGRjxj3kncFv2dEeTcziCFNAezoivPcuMD1QHjJ6hXdf9DENwixZ5Ecr9Vhm8jHXczcJf3L8WKqGva2a7pwWvL7",
  "key35": "2F5DB9bGk7sRKbHFuZ3tuJ5aMjb6CmrcieGjkSciFacJt2ue4P4aBNLbLUXT9HkNF7oQrb3VoR9xudipZQFUYkiK",
  "key36": "5cBf5ynZLaQ2Br4QMEjuzrXBdUL5pSGDgpM41oGQPFWPwA1e8YogUjKaGmn7iR5iDNRVoeKtoe3MvSnkf26s48LV",
  "key37": "38rRadtP11FmSX5cnBfJSMPwu7bHZwytVx5VH1SkEo1tXhVmbsadmafgtJUAecn1MYrBA5dNGvGoRGteANTSiHVG",
  "key38": "4edGb4yApNyhpWpdKeTeX3Mi774WauKWQQCL1qVrnAUTnAeFeTcGzgTLRfSw1tT1mH5zgApCmex1n6kP1zCh1bQ6",
  "key39": "3vqPHepDhHGPXfFfv6WQGeiMiqD5s8v37Hrb2AAkHBn7pruNQ6AS9C1PRv4udJazbmQKxtqDemrvg2CjBjB6V2p4",
  "key40": "3dw1hvvJn9zGWk7cke5nuZYpYg72FvgfQAMMh9SQX9SvScsqwhxotp5PUScy7i4gn2wAh9PEcQMr6YBUayhW8ABf",
  "key41": "5CPNzvHNEeMiFzAok49yWFCGSjBKo3TzEP4NMK8FHjyzk6ZsufXvGKrXUrzJo6BNYKsX4tghhUSY3GFp7WpCPmCC",
  "key42": "49UrGkJ19fhFMcCn4SAfBT4ahQwLxg14HKsfHNifUbVUuHD5uudGb7c5qBaLbvi3HTGjGt3x7usgAn22VxvL7G2G"
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
