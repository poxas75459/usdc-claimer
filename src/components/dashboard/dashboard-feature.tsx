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
    "5N52vhnpzTA7QiYYAsyhy54dJwPMsTFo2MgDVhY2rRqnxw2TKTQ2XYVaZ865vGeBj5TndsH7gXyRcvkyCZMH6bqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pbvXFLuuZBwSHwCDjqc9BJYsj4tMe4s4zpmMmTPZhY69aTrn5apNY2FDyvYby36p6fDUUY4MdZC4V2SX4oKpo8Y",
  "key1": "2uoGtA9CZqUydx5zv5ZaYgM78sxVpc4X8MyygiG4AEfJ6ADMdz443vwZZhfdeaBwM1dYkSRmhZD84WzUPoLkZch4",
  "key2": "4EgP6DyetEzqwChXYk7wxryd61QoheMu9L4EfXAsQLeKvmjWR2eRR6Zvhb8PHZvGiz9o65t7ZAYqq6q3CtLfCJFC",
  "key3": "51a7gvuB1Cyp2T92Taj77FKYUfPAqqbAqh6qPESPD9ARwbhMJg8ieN9ndzAqPJ8k8xaDvPgRF3pDa5NKTnnKfEPg",
  "key4": "23GAWfw7SR22AAAtmZoemRJkznmRWKWyu2TDia3WY8zBtAjDKyYHKuZpmD9vFdfB49rrXpaxfCYcgq6QWvtpowmU",
  "key5": "32xPmx4Y2Da5UpDmpWxADgjA8VjnvoRAyh3VNEB9M5cU8Bsfr1EpXPDNMPu6XmzNKvxCyuWUFK1wgQuepZNPEkNF",
  "key6": "5q8M277ezRimdoXhU4onRWUpM9DCznUmbHGhF3BeUYk75NUKCTHNj4h9JcsZ93MrvkyNvyLTiBBqpPTCpRyqurCq",
  "key7": "62oD54Vtrzx5qTiLZUqB1cCCmVAmobgqm6THgBYtY2gK7JXhgw4WyMJiT85mudqYMLuHjmUurWrpimvwdukpi7kS",
  "key8": "5aNZpsgzajMqADmxJtRvojSSZmWVRCAPGJV5WfAuruG2X8wDtzj5qwhHak4D4bBirH686TCx84hTwCPsFjSBag1A",
  "key9": "Xfo783um2dzCqZGyZjyMrzv9j2rUZAVSSmz9DmGL7Ye3GgKyuDRfYqk6DG9WK6UEXBLfx1KNn9ikWQmSkcdgFLt",
  "key10": "fS46HLZSh7ihiNnCvYpmNM6SVgNjYs1bn3fy7ihks2zrZL5NM4GYBo3jer4yfKPnM6AJ1iL3rSf8wSXX6C8rSXx",
  "key11": "21teubcg1AVo8QW3tT4bqUCHeuyJ4RmZgYKtWquoPS4KTAQmaUWVLGrw66fv9wnh7oRnQ6q3CoL8J9QQHgYajh86",
  "key12": "5fq6WGheHpN6LzhzJX3emBZafWdN6aTUwE38R5BsgXNTmY2ewgWbBt29rHSXmJbuZdQxEj4ndVHMky2HzvgeHM76",
  "key13": "2bTtbr1keWadRaphPwFuhrL5xxKXjfLJD7i7DJERsmQHrnKcGBwo31UfmWYvNwmar84TYLb6rTishJie8MR429f2",
  "key14": "2nx3UMzogGzY96H7cAXrnHZXeUGdf6twqgCQ4bNCiJFRaMLQvQD66yLsqTswziFSu1oDeo5v5CTbdA7zBgwADVGD",
  "key15": "4XEf2uthUx4HkXs6PyQFHJoYT4rGdwa2KToUJnHFtuvJoTvnMmshLC43nzrNssuKMWgM4mMR9B1jWZfCPbqZi61j",
  "key16": "5aiiqpbanDK3fJkfFMLVyxfb5ixZfB52nhcBGX5qc8R88vbMKkuW9PrULUtpoBLCzyDaMPbSUBirdXCJNKygBE3w",
  "key17": "5kUMXLf5SwXrkTfEjrCsoK7KtBTrCoiZ3G2D1GHT8TFQ9zYm9Umrq7pMaU3na8fktpufDtHyFznvypWK6H8ZSAdN",
  "key18": "4dszy9DxvWS1PHX7VkGNRe6AfByCuhMznZN59DwsHV63tnUu9wutxPP9eoDob8s2S178K3pYsb5RuhPWcXcuDUQ2",
  "key19": "ZPUD4ToQLT2cSYc2rDRb7EHFqC9qGFdXbtEFnzqQ9tpsNLSLYPQ2nh1ksVSXiqyci7PfY232BjpNWjMPGfVFeUR",
  "key20": "3fzv5SE1VD8fAWNtczhSpzm2yDL2KpHjuU5bs9vMSFtiqRkSYYdCZxBj832CPw3acEe7kbdPTv8ZyihS1VeTiUA5",
  "key21": "4KVQ2DZLWUi3MZ3ucn9vgu2yeTrQxoUSynYTFUUNJFCCLudAUrRj2LcJQsZXETDQTSYyoWrgzbcC9n3SZJWguXm3",
  "key22": "2jtqtA7B66RbUBNiXem9M7AAjM2dsm7msChG3H87eNbDAtabmfArXb1FyknW5SyNdB2Uj5b5vu7wdqEAKvzaGaCe",
  "key23": "5wjv4ysg3bAgE4BKBA5q4ji3oT9uz3bTb477P7xNkVGc9w2YcQQtsFLcT1S2a9J4QUL4PSG6fegQa8duUCQbjMg2",
  "key24": "5MyQ3XBfX9AjR1sA3Tmg3T9jGSXsuwFnXnWiMcg5pg7gTafNq6KN7pfBA52YMEhk8EAbS6q446Xm33KqkFUKLtpn",
  "key25": "4Vaq46fQAFC7cGnnNbtUDEXodwJkp8FFGXqWav4Qg9Vpi4xpFuwTfDFHNFZCM9JGnfMCDjsxxhq241J3Er2AG6RE",
  "key26": "3jbjMzHAPXbTUzDmAJc342CbKayGsAQnyZgxuLiYsPKCq2S5D5u2b7JeCtDS6A7YvBjBUnWjXs7JrpjZHY8AQWed",
  "key27": "2xJ1A1nktrsCHHzqwfuKNpvNgkJtWNHJ1tD1xawWdw8LhFcszoYHQpNi9J3wjAXCiHD8HWqKiAth6gu2PbjMpqxF",
  "key28": "4LDvBtCWFxkNWS8NqpgkTdvsbPzX54znp1hqQJusKPwMW5T9LCemPSUiPWFtx2HrFwiAGknHz77fTVHifuLgw4Rf",
  "key29": "5rwR9jXPzwJYvTiLzLtFtq9tChFbfZ1WSESrfwJhUdMK4mQKvkk9JAdHCfPceQjZWr3nuMcYqf595EFH9edvUzMu",
  "key30": "53LvZfoCww8ik1fKu1z3mkkHREmGFNBcev49kZEHjo2FT3HLaPFuwKUzwgSyTErKaLtXMrYyo4WkHRTVV1qgXDr1",
  "key31": "3fDPPuiBK2ypdWmzVBPM2jouyw1v7yMT6R8PCZjdepRVBWWTQnUQsMQKh6BD9VBBDYUArQ5eKWdP68926oxLH6Wk",
  "key32": "2g8jV2NQciLiixXSySEND72dbiDMutbRsxc5ffRuFHJhQw8kHsJiyAbiV4dsofQsdHBwNtTuTsxfohhpiM49pRqf",
  "key33": "pB3ogvRh6qRBFoJPa8uToyh4z2ReTWwxasU5NqwW2JYTCKaWz5JQq6Cs7otGRZjmCLqe6cKBCp6Uf8R1WgBgKKv",
  "key34": "3cYbox4a5JzeQxjtqNsJAzhCdLsy9wScDew7QdmXhddN7EZqvbSJqVHg3xL9ucMJpazvjFgh9zvnpeSfEtpjG6Pd",
  "key35": "3FPd41pV1u95hddYCwWWGEjisgzBPRxWna2BuU7viCHjEqEtsVR8CDovgP9sYCWGqK3BY6fgdDCzjMeiLjmpGmdv",
  "key36": "4AvxA22MXpvhDtpqGpGHTVJfCiRM6R5Dppy8uEsovXV7by5Svpdp8AGVLMGhTehmvKMVkZChhrP8Y7DqGUEv8pBj",
  "key37": "5R6ktRBRUZtRoEode6h6qJd7b64rB1NZt9Fep7SsbYAUTiGCaqGPpVomNcMcedqfqvptqAodqPfqBdDAn2c5bQcx",
  "key38": "X18XpznoAuHLLeS9nYUkVMSSvjQFQpPiD74YER1d2j7Uu5nnZX2v9Xqo47YP4uL1mLjPYvFsJzkSVW43sGtT2Am",
  "key39": "5YtmQRZoYjNo65NrKTuJDLPofMJKYDXmpg8kLJbQjNswtRqmuWGeXjTdsADb8hS4UDyqHLSWwmrtHeXM9gG8ZX44",
  "key40": "5TRTLn1eYzSeQLNJ3U67ci8PiEXLiwpFhoe75E3tnLsTbSxJugNtZWhRwxJSZZBwdWXNAfSBoBDXf2JXMwrbWFkR",
  "key41": "cdz1rwFjZJ5hW4QixH6sKxdkggshPmrR3qAgVXqdpfhT4uyhb2UnFddx9K37NByqUg27vas2dq9ag1UfYpEcU3Z",
  "key42": "4uFarCYypVrGRjLi1xeYFbY3Y35kp8vreDzxfrwHdfruHK6x4VGX9ri35RcKrFemRB87879qwb4cGpBLwKAWZxeD",
  "key43": "eW9xCUBKu1vfBZC3iXRBg51qJH7jmJL6RuAYoH7TA9oDGQFia4ReiYPyzsPZM6SNKnx9erwXQBFtQmpR6EXsw5W",
  "key44": "5hHP6TiZNU3V3ZUd9HMLApVkURzvjNtUv7ugP59kQ9UU2UPcHezd4bNmJkrbDQC381Bt7JmqPNRUvgGWFeJHPhWH"
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
