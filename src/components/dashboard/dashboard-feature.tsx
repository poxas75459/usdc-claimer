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
    "2qGEncpqLjzzUGuqzxvRDrv9T7oiUhkzWFvf7YtFMLuhJDXCkst8GeT4fXLQQnWimnejssEkEmSesR4rL3LQrwb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dmQB1kGewhFUpBhJn3EYhoZGfjRFokYsokMr35WePxEWjR8ATKCH63mbscB885Jfyjw7hNMkkSZ8iJYxs68F3yF",
  "key1": "4oDeghYv16sb6mzTBca9LPLMt7CcsxvDkSLYbvco86WPhar1xhhwy9om4746yk6TpMDFqz1Yqfsd9AXQGvucntgK",
  "key2": "yByhaWjWetbT1FLQNEYacCgVzKTtN8jvWvzDhqK8rj3qGCLVCNtxxcGDSNNaU55vHQVCAct37Y3Y86iWNJMtsLr",
  "key3": "2FJM4cisAaquYo85fnyX3obh2WiNqYkTPxbtFVzkpe4CgABgHmYodigWeZPVWBTaCHzEXrvkQSm6rfJ4RKaYCSJP",
  "key4": "qqUvaijRqxyazQ6v3oBjZEceWc3Q4k1bYLDAqKpP7wj9jJoW973xLStUhvgrWLEKuqMhumXHPPsjUJfEZaN9UGa",
  "key5": "4gpuzAht77GXDrQfiGAtB1o49CWZrxGHKKfpwB4UW3dWXuUB1Yyh1UDjzeuP3HjrwfbTG9RysbLtmDyoYeewDu2H",
  "key6": "5cnzx7U11yWLdf6oRcXu9TZMKnJoXgKqWq8AG5XWsetbHeVJowPHbQ6LKRRDkRTpeoaenX2KtaWnWkym7t3Lpgfp",
  "key7": "43Vdv7r1UbjX8codPL61U8ZHDusnqR5H4ResBwVuXCdpeNQ5h3FxuS67rVPccs2XHbYvGV5t88eqW7BfSnPK1ZKd",
  "key8": "sUnM9mnBGtZ7W2CqXwzycCapbTkV9MLp1jZsjZcMtz5279syt4qXryPKiYcTD58Vsu66ZnfJ5Rq5ZY4oMhDcNa7",
  "key9": "4n42iAyxQz8b7GZrbKdjVbW5j3DoaCwY5PqYvpX8KR62nmFGXMmxnbefWbgfoKtSiv2JntUZDsi4JMB3iJpsSVb",
  "key10": "4ba4jCDTJXEviVWuxfDZvGzA2aaVR3HLDmCCvHUcXZh52HhGxvfRYq79TJjtFcaR79YkSjzHDRm5mqPdME6TocGL",
  "key11": "5a1cDRJAbjnmyLk2z8APW6U9nBVcVMQRGeQtQQAewHWQ8GKAarye1qVA5feh5i8xZFKmcS32s861kP9ptGgUZpQq",
  "key12": "4AC6vkV3LZCyfMJ5z2khvcFihvzp1ntaHRsAgjsXt3bNN4utpozUabrxVPtYKYfyyXBU8dL3qff1Kg2ZzvEPYqw8",
  "key13": "4ttH3vnRDWgaj5VPgoHnR4VDjhM6YSJjPQDqXo2cW8H7Nm8gXgSXx33rFxoLJVD7N8hn83MWEsnjNGr238eDeqx",
  "key14": "5VMeAyq3ja4p6tEn2fC7mKd4N85L1KC2LswFFbKGhyGKuEHKe2MURdC8sRQh4WPbr8Efx1ffGd4j8c1J24MQiUdL",
  "key15": "3hZYzUyax7SD5ZG76XNDbutcWguzktgKT4izPQcPigruCwyU9d5QxLVGL6FHGbNAvaLhpj2zXuzemfdHH7gMUoHa",
  "key16": "vApb39uSMRYnwrceXxekN1GVzduWVVRgKekkiHSwJkEVBDaSCVUAjS32tqdxgGHbDkJbV2QkVZWyuieBsCchGNe",
  "key17": "69Jf5MzjSE8yp7eavVqCeZWjqKFBE221yYHeV4Z2BPJQPUGeuNDrZCgQ8gfA6J2EUKW72KWhbwohCaWFDtEGLa2",
  "key18": "51hs3fDfnBBjNDdRGYyEUGSLPUxUEcBHraDEgADx8tirCwdka3h4TATRsjpjh6MFJur3MWBRxxA7CkriRCrvzvkV",
  "key19": "5fWJ73FV7GA1NWj29w8biEQV4nwHsyQc4BBiR5VbTixTHcdSi4YNrDhUH2wY4J5WiAMA5YAnjst6dnspswekwxHV",
  "key20": "2HWE3getXi1BymTMzZkSeMXXE5RDVKojyavs6p2LPfanfU5J2qMsnu9eDa4XuHWsMUJdMWQBgfpupYKK1CZWtY6E",
  "key21": "2fG8BQxJAohzuLWaPBMCt7bWUM7AuAe1xhfn5CXaJBqfzWmivKveEaRkwF4KF1THjsf3FPRUxWkpS5Wb6yPwM4nQ",
  "key22": "55mp3gRoTmh6wFNYS2thUZMNcSxAZKjs9PewmBqANCEEbL7LMdpN19PRQUB7drtXeBojQshQYrUi8acfzv7L1m6P",
  "key23": "2HcweQBimqCYezMjsBa1WYDpWJ1iyf9L7nc5M3e6Tz6LgzmXKoej1WoCFgcF2JDpgnfJeU2JbqJ24kNByAUmE5Tn",
  "key24": "4k3H5ihGWEm2EdCu63k7otsjT3SyCQd8suMfc6xaf5Tqbyopd4cCZ5JHyr5wkRPQ9oaYAGqoB7sYGvrbAWtqmNkt",
  "key25": "5PwM8p4PjgA1xVxSXrp7BE8hAgM2W8LvgUuNXeKFpGgDTEsdMupwHzutsmrhJQyCs91oNLAh1Ep9aDPNvMD2wgzJ",
  "key26": "5RrUynqKxcKy4xbBd3Dn32Ze1YJi3AGytQmUeHfeTdcCuxKZHR8u1vsznBrge82GAdDCaSym9PweoHbmFWoj5Nm1",
  "key27": "2ianuJ7YZVwazsTQJDqEbEvQGdk1mTuRW3VhietBk1T16UeVAvAzWr2W5qamwedGTsZDj5aKnBmmsNVuPcn1v9GS",
  "key28": "3yLhULBFVxk2GVErQh5NfQutyE3XQkZFu8yWXMdgau835gzdhBffRbvtJZZnNhAcxHKcY75c99ZXTmqSTEgQQ6yw",
  "key29": "i5ZdYsRZpfzc2KtbWuo8ji7y2h5eoz1BxaUW42bV5kZBrBEhbntQLG9Z7s9z3t9rcr5F6gtM34GkjFdFqJ83cuz",
  "key30": "4XHXQSTwct8YsQDYSoZXWpvr4Lpt6jmrfuvjJxC43DMw7TLfV2Rv4W1hmKqQEmbK4pVZor49zgQFdWVEgmQKwQ1c",
  "key31": "5bAHSPPyVn5pD6UGGcoJRRT2yitQKfKMxC5H23kC1NszmysGwvqAjEwHFqWAzLffgyuonTXrNxvmMW9dpisLNAKQ",
  "key32": "MrerQCWi5vXi46p4NQg6pWUfzkkX4iK2MoAUZypMg6GqFjqffPAHPYBJh4ukN6EsLMvZfE8gnEfwkV4zq9gCfrR",
  "key33": "3e91KvRzEvp1H7eaj5B17m4QJb7w1pKHf1t5SDSfsv9zUAvw2PAD2zBCRp3P9tu6gm6jnQEaVx7sNjmZbMPKoAkv",
  "key34": "2QyBnVTNngvCRZfVN1wR4mV1XTxiUSqvn1JGvjbnu4SVwYFdkpaTzfoVHH1q3B22bdeisPsWafkAy2CwxHLe24x8",
  "key35": "CXWQyeCmTVyGSR1TsvS5Tjg8zGooJCw45wPWvcjW4TCtG2bNAuEKSUepjnUMLVJ527YnWJHbFuNu4iwVqbE6gmT",
  "key36": "4z2QkRViHHRTogycKVsZaQreqvfWMPZ6vspQUevuPGRTCu8fM9n3iEK2YKMP6wGeBBSrNozz5cZhvU79jsHSokvL",
  "key37": "2Urtmzb9YZMDsLMxHQb7EDBNXVq4W7jTua5cJ3ueN6beFi4HBqVi8tHEeY4WPsi4Nx5pQuzZpaaSEvE9CYPw8gWX",
  "key38": "2EqdbjWBHnMMSxQWVc7LHGbVu7VA493a7Utsnd981GH5ihzTcvUGq5gGtUEjUap8CS7sjuJZxHaab8gzaj9kY4wq",
  "key39": "4STkisTtkg1rcc2LBbfHWFEJMA3Ky68ad6YNsPC1ZittscHsZHXVxtT3ntSnqydQFyR2HDuzkPk2aeE7NYZr9jhE",
  "key40": "3NU1p6GLT4Vm1DP8tUvangPzzV22RiagkUv6cyr1tP8ne1DXXpcUjrXESQg6BBcXW8fFUi6n6cekCm7kdsQ7o6Rt",
  "key41": "29yYxFP8spYG6kugd9QyLZG4yqNFcPo4v1dUML4XC7Fku7N8gGpLBZUaR3fNnQkc9RnGaJ9Cyx3SahPcyjkrBkeg",
  "key42": "4i33kt68rRonPNpHsqCVp5Mh8EXz4Wm44V8YRNFzBm5BJ1a4LGSV34PkNegMzj775aguVkazmj4q7uJSB5ou7mo",
  "key43": "5ihr4nGvN4BzeMZkQ5DKTRgoski8N2TshRGDXsqQjfkAi7eQyPYEuJfEuMZrob68RACUa8SrNfq11829Q2SfVygd"
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
