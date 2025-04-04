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
    "NbLy2TaoAPQws6orZyYScgX4Be9onWKZ3VkmUtH9iis7cGuQAQyrTarm5b4cjU1wYzKi3vfDHpcUULFpL9k3onY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XWmaQE1XD1VTLbvNzmyESNwUcymp7gLiZQn5KmnassRLnyb1hLvJXG5NtmKiv7am1acquTv98XLgJyH6BmnRWeZ",
  "key1": "2E3ofUBxeCSSX6fnvenY7LSDa6Zvr2TJmyvtAmWk2hzEdRynM6DnVqFpLDC29kqxg93u2b1mG4LQCmrEDAU7NX87",
  "key2": "4NfTmSkSPtaKSn9fE5aZqY26DVSvWFq4f4xMo5ju2kmAreNJkiw7suQUVp6gf7Uphm8QaoJCVmwmNS1sgQ9zDqJm",
  "key3": "4SUbWsRHqWy1WAzGX6cX5nN16GtiWmT4KKwdXeqdu4C1XxpwFbvUQTb3tCppsniqLVrtuHJj6WiYhZRdJioT8pMM",
  "key4": "3vmBdnfvdDAVXPTUfbzVXWwQkCtSDLNaRTmJ8nUkVDLSmbipHwVTd6A9nAASqUhZXDzV5YX142Pkg8d1Pw2psXJg",
  "key5": "34ivPtUx8kVMfw5Evnu3MMAdnEz3DFxMXipvZvSzn2rhpoafsgJTc4KKF5a816wpVPfGSkLYDtbmtMuxua6njiAi",
  "key6": "2v37dzj3CHsg48H1LKu8aNuMxDRL994NFNonLVw4LfnuJSNWmP9jqEmrUCMNTVFBPhLoDfvnyqz5A11vTddW3LXT",
  "key7": "5ioKQJqAcrYNRauhMbLH7qZHMAzW6E2kVWnYBNRq2bBtzYdwhV9FwejiFZyDFf5joxCTgUvBxXQTaE72HqbgD21K",
  "key8": "4Fkud15RW9euKYVeDdBEAQukUWNRgMeG5MKghV4d6wKeQYW72Zfce3Qs5QSCcf3tP6a9UQasynw26ZoX1krEq8VP",
  "key9": "waUim5uVTALEAHp6ATpgsrgVKZepcrurGo7uk7MVEnXAFhpxZpzaj7rw7AjR4mipbTti7ymqVCez2n2kVb7uXn1",
  "key10": "wYKLa8x9yczy6vtV4iYQ1iZMeYB7pdsTgY5rvFnRjASuh1jaZLUerLpfPYK4D2EDB2hvvEPWy3Lh8qMgHFxK3uy",
  "key11": "2rCQoEbJotnsEK4xPJDPJGKogDkPXkckGsLqsoKmktmQXrj4UfAVdwhCJSn3XyNwXCyE8kMhSejPmfWGuNriWau2",
  "key12": "4FcgzJ4ZYhog6qsiK96Q3AqdSBgtj7dGVq9bEaMeTjpE9GHKh612RNUK1FmsGrwuxwsD7FjZAHdRjtWdorwkKee5",
  "key13": "3X7NKKFMftG94w5Znqw7kagjW1frz2wYRd3s1uVAC1czjqEXjTpkJnuZyoTPwgo2Cv7j2tmakXmvffrGYHWSy6tU",
  "key14": "5H9sSgcvcsGQFafMwdetAcN7epCG7oDiMArA9pHauSfP2KiJizUiPsX8x2NTLZ5WYRkWreHJ571L24TxRw3Ru9Me",
  "key15": "61sEpTX4DLZ9d1J9F2KPu2sVSDTY34B7c9YLETctg6jksmTHmg13PDhm2MrU61v27fcBtChFMjRLREKTsydm5BRZ",
  "key16": "2jUauryVrQQ6rTRDw6xn5NL8TqPbo34FTz7Sgvuwfk2UX8kkfRBUEvyyBXnVYZjKR7Ew45wXui5BSP6rR4tic7r1",
  "key17": "4hrqtyDyWh1zZpGw7R7Gd3GtUUWMoDf5MH4Vbthf5k9psFaZzvHoxHciahcMyurAwS72MdPeMHhFBxi97sDa7rKS",
  "key18": "4DeQYdn1m4bYdmLw2URfUN7i3mtquZRKGJvgQFpG5SC4WXkC93vgt2DX7r4FxYAM3Dj1AwNXCCa9dFakUCaBSE7v",
  "key19": "3KXmP2MBUB4XYGcp9n3qGpZWKutpcGhUjAUwD7VTd7hN7trjeAMh5rdKJq8Mn3vAfjEJrDRL6PfBTfQVuk4Nmt3v",
  "key20": "2V3cAELfZ8J9kBdqPya9niHpqhYN3mkFRhQxMWJcSHpn3UXiapfVqepYzhsqiv3hfoz7oys2bjJGeCwaL1LTYWhL",
  "key21": "4a1atf3fGBYHuCFJib8AuEcVpSy4TsQaGVtQeb8SDB8cEqx1AKXLabLN5ugGB8oyQ6C9PMVfwe59W5rY18gfokLo",
  "key22": "5SAodSpJTMwtCcWMCcu6CfTrefmnKCS32sfL4Ho44HMRs9YQTh5YufLqd3V8avz32KYqdy7HEL7382kC1aTXYGvb",
  "key23": "5Rjcpwo17pMf7CtD1BcqKapRj5kSBw56nReaKTYveGFAEXWhF7JkG9oDnAW44ZtqRkca2pGFnBsePw3CuZzj4MYK",
  "key24": "2TvTF9Drwy3bHo9tbVKYofttpVhyk4H7vvyni8AEZuHWE4NeP9XByim89B9YRnL49btbc6BgP21YHQi6zoaKRX7P",
  "key25": "5BiJmTjFV11XsNuFpNriW5n1C1YtQsuaMde8D9bXgbodmNQfftpnyQJmNx3p1WugUaFtKbkLjaQMuPPoxXcHV46u",
  "key26": "35t84DdMqcNrzMaJfKf9aRfeLBumntVrNAk1pscdDUyWhggYRvWBChvwCyvKwZEeTVLeQQDv659D7eErWTt756w5",
  "key27": "3ygTMEBqr5w6zjV5B6osdu5xc8tGRbLF3YnpFyXGdVhbihKpYKoiWBFxm9CmmyGGiycBPes4GfU7uYfphTxtctCw",
  "key28": "53Z31gVzVGeYjUzwLSAjhyvAaVV31RGJJypSYRG3AtoKfoWDKmCUWNbKbykb2LaqKyf4s6mpg5N87Gg4wtdVQ9pU",
  "key29": "5mSZWhcK7LoTpzrgiqPWhSYB3ZxxwhbBPqhkVrqoikxVSR9oVw94YqLAc2sR5AP5tctGbcXH7zi95N9zauonftDu",
  "key30": "2j3n5pQ73ASfN58SUHFsZfAvq3PAASc6QGg7S7xNR4abJpvP46qwePCpr7uvf7fXkbfwipTTy6wd1Nnaa6W9maxt",
  "key31": "5ryitxrbQG9HUPqoroszPzLh7EjGiNGxGHUUo8ujtMrZLXSMQSKVjDspHQHRMT8NDMResM9oCqH6imFPxitaBzbT",
  "key32": "4Zb1PrN4RsWsXfxZ24HPZTFwmEX14f7jUHdqaikcmzC7EhGXk7WxYVhKSr92JMYB6pZE4AcCzThWHHBsyhKHXGVw",
  "key33": "A8LwPgBrPHbXhm9ZVRKJ9EGaqeHQs4VEBzhaC5Yoh3bWRH1JY1BVGUVhPSkbfcFBi3m8C2zGSJbDx2WMrA4LzwF",
  "key34": "4ZdH88nj2JYnfcsNzN4oJ9WnCvX5XFRg8FZuRNkPkUHc2dGQfS4isCqj9utDsgC1QoAUxtfocibZVKei1uPykMDR",
  "key35": "3Z5xBW3Y4yPNr4WpXvMRsUvZVkyvq4TAWGKM9caybqxCgZySQxNoKaCtooi6xVZeX4xjJTrK2hmf3fEULNY2aXj1",
  "key36": "53kbXuSuT4azERKL9rG3A1Xg5pSsPrxnkqu3maSGrnjzdHuBMG9dfpE6xsfqBLGbDqxvzpXADMKmnWp62MT32oRQ",
  "key37": "5rAeS76TXZ8BCZe7obnQrabA5vBCqq499bEDFXw4WRdVehfjmiCzpbi3tkaBELkQ1oiaG2J2EyepVJnu1EFpCzMq",
  "key38": "2hHw7WdatkWGzBFnX6jnDAtx3Vhyr9fk3iJW6kAk8oizQqQBbLunrDKWqPwgRtMVdhUFR3o1XXj3T1h182gtZzsb",
  "key39": "u51KdyyFaZSSFMLRpQiknsXtnR12DeH4eeXn9wWsY1NiqhYUgRhDWR7mdRszJkJE9VJNuK31cVcjehhY5uxYdhY",
  "key40": "5jhNVfLE1Kk4FQRUuAjrc199m4witr5t3oJmABTsNwYrwxjy1CYMGvxTbnTitmuWXUBRmHhdkoX7XYo5Sw2bteH6",
  "key41": "M1m6WgVEwujvPqQqrD7rephoWTk2wokmKqfotYEp1315LALgwvwZ9PaqXrb7MD8iy4ksWtKzywbVcqyufwYSqtV",
  "key42": "3pu2QqsPUTQwLizRG6vzMbWViNcERqk6mK3cDMd9yDMTd3EUaGxcsHeA1TN6udMA5APi5Kwspue7S4fSD8oBWesr",
  "key43": "5ntnt3JdXnpQiCv3x6sCGh1TDoVViFHNb1VXBqfNzdyZkaUGqQtBbrjMLaarq6yb94rd4fwWDmP7i7WVYEVqCQNj",
  "key44": "2ijw5rkiFjgQtQh4fsTaeQ1kKAD7EWrgHbJB3REPnEjG2z6DYr3i1fYUorip7WBxUkfnYXBXd4fUv98yjYzZ8APb",
  "key45": "YQsFHFRhGMDzyGzP21tQsQ5A9he7txsZHeuWiYbnKxXCK5sgHisXc2iaKXMqWunLYjFhTnvhyG8DT6tSZxEKFm5",
  "key46": "4o3JHZt1eYCbes5CXRGBXVPGc6Na8PnVhvHacmSb3z5H7GMCF21KMrsE9xaBiF23E7p3Lc1pAoryENwZTDhsm3WE",
  "key47": "2bi4LipMWtYcfEEZdqCKv4xVkQE7jBsttuHchypzjQy2gymSJQfqTVpnQFfysHn1rub1TRUcYKFMSRYsHz7AfzdP",
  "key48": "33x1tCx1fMfCixqkrAB3ibHqj1u73HPi6nDnawppiaAxrK1c4znxc1VENG4oMt2UG15cGGu5qxHLYLEL53GpmZYE"
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
