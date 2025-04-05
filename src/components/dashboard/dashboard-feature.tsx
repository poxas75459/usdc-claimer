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
    "3AE7qLugCKWb9rZSQiPgGwwDLv1gVE5YgNfUCep9C8BdjjwyWnKEbMWfoT4iSTC8cCHgEKy3PXEQEoddfZe42Awo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jr51CnJfRG1q3prVAYLiReAvM2jxWSzLt4RqaSBSafJCFh6xJUcSs1SoZ8QMM533DpkAuzbgSPVGaSP9zgsDd1w",
  "key1": "ATsvwupBLZ7hb6k3a7252ygqtut4WH2MSbT5qZsGt9ThELiSehehC2s4g3419ihT5kV96GuSmWpYHkbaWdJjc4W",
  "key2": "3PEEvacFXUShb6HeEFmF8ScLPq4WxAPetjTd8161jM1Z4MLKLrXgPJsLu1baZbgsEDXS2Hwh35bh4huNzfwwqHz9",
  "key3": "sgjuVhKrtDjYZx6t9oKUfNWuUwq2P2VFQ7nADRttvhjPabwVVzkeWc36QBxXYdmeX3sGSQod83DsNnYPmbGivWg",
  "key4": "2PwF4ksztCcRUnBt5JbREWGdSeChTGdJX9eeNddV2yTzaTebgiogV1jtGDqbRP9Wkme1sUPuKHnZmsmMqbwVC4xd",
  "key5": "4QhFYewYxgzXfjPPQicZirYDi3MHvk8q79v664bGmUJzhyfYARTxmZNrcZARv4a1WtKg2Dx9LueZhaQLp9dm1Vxn",
  "key6": "3TGhvWBKQUucacVv9VgtdxpLndtLv7UYk72rgzfKN3tNuLQo2Y21tVweRE9dgiFdZpUCwMbC9ZjYsPKqUkt131v3",
  "key7": "4htqP5xh74RAsLe12RTbxEHpXo5dYEXynEcQYya3ihauL57p1VWuidLzwzCvCjnZmTHqK2Jb4BfuJjDmPKQszmmV",
  "key8": "529Ga7zzaDHgkGqMcMGgpF7NVP3rkhP8HkfcZpJF5J44WRCTWRzgb61QH5TcTe9kAicC4vE792Y2XAzdhbwtA4kt",
  "key9": "2gvNuRMbwEDrB1xkpeEnYkdEuWE3dHX8yAGTexCicjKUnWtuvdh64bieEM2LKmcCmw3DwaWyCp5w1ykGkP7LyyLV",
  "key10": "cm8dz98BKjSQch1URwpGwMB8vhYgYoiCX4SJRJq8iAevBJeQ8T7oWtzufYkQqDan8EnMHcV256G1jg2Ve59RbHd",
  "key11": "67LUBXAzVgZLkqw8WkoumsvrgR2kNmXSanedorkcXo8Jqun8jskjHi7NM2D9ZtFPH6extXi3rZEFQisHV4WtpFy2",
  "key12": "4BFKSEKeaHj7ptLdHCgQcGZHHbe9uaTMVk3tVouFLCcGCsKH1NBpbbNv6WmP8zjvQnXHhHYUc4fj7vsgGiTDjnpZ",
  "key13": "5drfhrjywi69ybFbGs9ZXKfahdDqvMUXhmtSm2FD2iNtyNbjBT8RYQf5ujfbH7nA5iZCERYzn1TPAucjim5zEP7s",
  "key14": "59EevwDrsPophD5UjyHAHk4vsvV5NkQCUoiHxAzWJ1i5hCPWCCfD6cC7Lt4kPKcYTDivqKAfY88jqou8kzCEJYSS",
  "key15": "ebT3dN4MRpEGpLZijrCKm4dL8dKA4jZzFY1aQHkCAtjJnMn1tUa9XF6qfEikD652L676sLAfmpnUkAXS45pAFyu",
  "key16": "4uzLVpgkN4cJWLCMjCe4xxp48YGtxib1LdXfUCxiSxmumSnVKPMsoQZj4CJBgeA9Py5S5MyxpGo3dUgHcfLa1WWL",
  "key17": "27BRa4vpWifsRkz7n9GGgZ3dakaAL4TJdPC7sBbmqY6BA9kTpBTyseC5VT9wrcNogjRhPW7WtP5kfNsRRYrPYKyn",
  "key18": "P5ncMNLvNxkteA1BbBnMgQbiUbpQwW4dAfnWkRmaESrxq5UyF56xTAC1xyw65bWEwbNKjJTqTHDxmujuuhXaKEv",
  "key19": "5fmRzzXEsjnDRpbWy7mbNZMtbTbNUnBcMvERsbtfnUuoRcJzhTx7R9R4Ck4vgZhQmq2c2k35reWCQu9JPgyuXDDk",
  "key20": "v9m7Qc1zXCthjLWke1TqpsgLA4WyqewwpLxFnxDvDht4brSwXik1uXCxYnd7kuXgG6vietUTmKBTTz2y2QExhiv",
  "key21": "4yjVrX9sgbXsRvFmjag1Lq8HtTnyUMgwS1zCLk1sRPqYzvsh2q1YQHAwF6Kei35SuUvFJu1WdEZPTtco5UjutFka",
  "key22": "3yjqSWHNu5Nhc939T9YhPNwmvFG66afTj5pCTZhXMkYTJoYrzCun1fbMFuv2r4U8ivTsPNhqurmetwBnynR1ER5k",
  "key23": "5i9rkBkJmuvXneEkYrDBAjBRitaSyc194ZzeDpm72fxMXkV8WSKTAptwYe9BG1KqZ6fUPfMd8r2LrQMGbcuJhGx1",
  "key24": "2FyDUVVqkfTAD5DYZ6urfnkWfZVKAscJgv58LoxCLi27ruuwhN74h1b7GZsT2Py3yTER8qL9qp5DBpGe5xUAq3CM",
  "key25": "2w4dHNLcsrT95SjcTNsoXsbTRXC9ioHVAZFJCP9zUjRUCXcDX6bdzZ1avcfvYPw1f3j7ibu8t189E3Jd9yzsEUCd",
  "key26": "3hCTACVUQu5huBXyFztFmuTW6BsRS94jWgCW33a56rQWoaBR8JGjQSAW2y5cTMYuo7LAAGTiBwS7YNcjWVWaxctf",
  "key27": "3yYaWnS1WpJBBZSErCXYD5ZGEY5yGPpwqcWpiEMo43CBbPM1v9eP9KR2Qr5Ag3BnQfaVPRBmom3cavhp7uxkjrwy",
  "key28": "58SDHom8Zzo4Ecsf1QRPBjWFwyVgp8VGfq4cJz5BEF5MUd9Jb4pcWsu4Bp7BAmNnYm3EtY35joNcmErwaWkHdS8Z",
  "key29": "5zbECG7EgnMoTLTjLkW7BrTbGYDgeeHrEkMPeVbso2ojHK7k9jHC4Zh4XMF3yijt4KB87Pn8SPC63L2pr2hQoWdz",
  "key30": "4UnHW896mwsjBvT8BsvyHp9yYRnEZgrek4s9xcxZvndNX3axtaasSkP9nMXUsXanQepQmtrALJwFAWW3MzyCY7oj",
  "key31": "2Du9sHi11BSXwYvX3DdNFPDxLuEf4GSdayKTUsj48UNGz8AgPNFaUpL5UceeYP2wZVnifG93HXPfgPaqNqYzx2M8",
  "key32": "mVGZ4RkCnAJ4F2cshd66wcBzRxc9XYbqaMEeMmtSFfZ3WghLFaQM8k5yL1djdjcLtPdZDKkosdedXKjx8kzttrc",
  "key33": "5ep35oqoNutXBHLbr6msSGF5WYadzH5vi7LoX9NCaFnS9ipJ4wjAvcDzkmJkEj47CZ5hdf2paGHudxLsiv6iEyuK",
  "key34": "zxtor7wEaE528i2vUgqVAQro5kEjviZbzh9ggS4YQ4hbixxZvt44KQFAU4bFmBz6Cr9CGvXDkoidLbNNWrMC4Hx",
  "key35": "4Z8VnuQNRoxs556n3H56wVeHYJ9sczSdjsGpxqB498AWafzAAfWVbBiNDhjSbYL3Kpr4bNi6ijr4h4kj3iFm1bdX",
  "key36": "4XzYVn924DWZDgiK98hWNY9bdrQWduJRrw1NTuPg4B8VBFhqxucnaNYZdup41PtA1V6GoP2uvLqApfKfMX71gU3v",
  "key37": "5MLLCeUuikDD9gCRctKu3wFJ2YWoNq7J9FX5ABcJ68sEF6odc7AYds2CMi4Z8AJJg9LbBNcV8jKEmngCmG9GYsXF",
  "key38": "35c3R2V2jLbPzJwiZbkpzdigpAyVGbLbBSFx3MHetBh7GA1qvKqGehYjUN6SHuEj9WT8kj94EozFdotdoaWHtUTU",
  "key39": "7kjmtFizYQQjuS2b2MCy3n9qdMRfkshcAcgWPpZ7KRSSC8Zj5U4A4kpd3M3mr8Q5ZyRt4gurhNVUHKLg1z3w9wh",
  "key40": "22u9wwi11d8Yicso6fRkpki2E9caffGpcE1mn8Yfes7wuGYW6wNSsMhTP9nNhTnyqx8ort6BUgk5F8X9GcKjKoXh",
  "key41": "HidUDfK3ysw45jMHxxr3SzCeMpRYF9wFm9dSaVYJmSEJuNfSV8EC1wMbZEj4MjxjRW5o6gaG5SKjFfGjzYeZYhT"
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
