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
    "3tFfuTuxHeUUyjDoP9gNXmDoaDK5PTvSiJhjzgdzisTYGgtTXCCGuBBRbHA5rjhX9mCQdvF32Ynh7VTPhanEr6PG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MydKRcaXnVEVXHxo2iz28eob8CF2AR8oqjokG6KD59ApcZuwHC9fXBvTKEXp7tcYyPGi3GCoNwums9kGb4PMJfX",
  "key1": "3jFwgAAdse1dyod5sv3rogdd6e12ELHrUkujHAZxzZfuLaQQP3JiPZTWy5KdqKoHvWqHqdhA49fwhBWwiZruv6aU",
  "key2": "4yZ2VnsvDiwkzc5Z9mBQPR7i7JE1fLjXaH8jymPY233pa65RPq1C1qw7mFwcUcgivkqT44BK3QLqc5GZTt4jZA1T",
  "key3": "3sbwECdZ5uor33KExs61skU3ziVqMzqKnpruG566FnY3sELAdbX9DEGGxNJNY86sCbgWBDiTfsAw9RhnLHw1hJzC",
  "key4": "23N8WDHsds9pCsLXUg4zcu3pEKPJzsEuxD1SFuRLvqh59tFxPYRf12pPh3UKhwx9chTfFoybL9fNsgnJposDgbWg",
  "key5": "5dZALEjXP1SapWFf1J9YW2WkuCyovgXQJUmQcAr5pFV9xeT3Ss8Hxr4mAv25E3jNB7EXPZgeKbGH6NmRk2f3226S",
  "key6": "2xYYNAh6HHKLuBnBpBNW2nPRBfghPDCewKYMRpS6dF7mxiAFPbJCgkbix1v3uSTYrhwkUgB1YbpuiGVWovnBzNCi",
  "key7": "4AQ4d5uiewfpa7ksP9uxskZz451yd2Gvk4MNU4n95iCzMkERRNgYeXef2Mn3kbbRSqMV2wZ8bS7rxhQoj1kjzxSx",
  "key8": "2zhMAubps3jDd9QkxfidWKkgzyXmFSuod6kfvsW4fwYf59ftsFywGmBddPXTDxxqZDhPbypsrABCuW7YJRJZUm9",
  "key9": "35PYoA8q6nPVZCFUFZHGVP1xL53n8uA5UyEkhhBVNPTgAC9fzTpxE1h3pyNkXSmfQRfqsaU3afRRsZ8D8SdDYpf",
  "key10": "2jcHLYLKgeDL876WfrbR3hQ3koN2U7tBH4eFQu6Ho36sXgQj7RV1tyYxX4bFcPKUcK1A7FZJMKW4TR4YnpDo17Ah",
  "key11": "2AVCeXYCiJRcYKarJDU6WzzB3gmQKWGGK5HXsdCwxZZENAoEWvB2WMAJRVr3CMMHBhz7fWpD4KNifWJPpDrkcFCe",
  "key12": "48Np8cHggy4YdWbhZCE9UzbbSPjs2q9BkS9Qecuwq5E5g1hqPdLwDJGW7TPJFwL5cpnfHxXoG23Am585DnjtYCzo",
  "key13": "3fxMXFB5PYXkNQ88gwz6HEno879TqZ7CUDpGEN9vthKxAGczsAzTA4ujZweL9cXD4ddHEX3ZaziYwD8rg6Rc4y3y",
  "key14": "5octHykohu9CbUxHsGfEJjRQzZdbGcTjziuNC7ish8kJLZsJkQrbYGUHD6bSgxDsdRLoFhPUUB8ZriLXnhk6pNKA",
  "key15": "4Z4fCVp6xBh268PR8rpVvxo6LiH1mgayj8BV3nFechZhbKMtRE8yLK1Vb3x7P5Q4RyxFe58bsLWbhVkLsds22Bqq",
  "key16": "3MShoSZa61PMznWTnV6yVHJM365vgr7ZHk2gTPFxQK25UjGq4CVUsDCyNcBSeXnUZvEnjKS2uZYKbbc94fY8oZMj",
  "key17": "RaZeFzuJ6Hy33RjafAjoGYPmP9vYoPiTNxtpCUfkBK9yYyjcHnvUJ1orKxMCzbevFsp36X6wipbdehvEsDWJ14K",
  "key18": "4i7BemATfx9HpC7VnLjNbouU2NSHmvF5f5amv2r1fpAnFkHgwB6ZugDyN6WQ82DoqdNEFtnK4S5DidCnXU87VRt1",
  "key19": "ANiQkeYrMUXHdv1zNqTWV4GVfBn4Xy7vv4Ryt69oUDu42aJXQFUnBjfoUeg4N8PF6MnrtyhJnP6LQTFEaboo9jq",
  "key20": "2GuZE5aJHptz1ocbbTsbgDt69xBCJtDWNtLkiTNB569G5zxaE1Pxg5Zh92qiQ1eyCFENh6kcQKKs4g1y4eF4cqeN",
  "key21": "4C7QMT8ZetTsyW1T4dzM9xwBa5najXMHR5MU1WpBpPu8FjTz62es3kVMpNat9Y5UvLCDqSRtjz2xWDi1tGRyKYWC",
  "key22": "j6mCJzLxdJTWyju8sHS7DdkzQs49v85cedW2mf2aDrUAEisjdx6SCfV92w3pEQiDzzi19DwrfJB6BwmEgKEZiay",
  "key23": "2AW5dCUucspa3L8A474v2KY6inM7oHStMD1PS7zcQUpsJYeKiCw3GTAyobvYxbYhpegrtuW2Qx91FDgar7aSnqDp",
  "key24": "4cSMzaXSPevfYDeqHpQPqXXcLz7gWPci6bSztovbobqEDMYC7PmDp9bo8zoDVUwhBJ74mWPuHjM5Zrs1wpW3ChYY",
  "key25": "ayLH8rUk4GmAiA1wJQc8ntV1FsG1dnWWGyfxdihqS2GrikL3RhXnFG1xpLsW4qHuNNKSAS4vj98b7mgWgFbVVjQ",
  "key26": "HRZFfqBtA9SJf4NwXHs44du9HceU8VTRAYfujQnhkNTuG1eAk8xSXHko9CoScZ6hgxsdLEkpgWhjn5Aqw6QozDS",
  "key27": "4qr8Vbb3Tg1PRAnWGKbNfDsPxehpSihUbjwJCnFCPMtZZvQmVBCAKYvuAtLrEMYdJzruvmr1oC5Q5Aywi4hyioch",
  "key28": "3LrskgenLU2dRn7SpcPVRf5dUJ1MxSMfeABa93ks1rYgw9f2cqfvcqmzftoVhYfhAoAGMNgqv23oGTxkXv3169xG",
  "key29": "3e8EWuoCtcSu6yRMYKUvxxbVNDi4g62uZuHEspMFUJ7mLXQ382VAkcXfCZS3Bt8YkU5rJFJ7HenXxK1BJJHpEfpN",
  "key30": "5nN7CejBm9TmmjaedGYoJbDLq7v11xXqYARs2jcoEcjajyTg5Wi3HFX75QXkaue31ikffY1hvKMz6DAPxnv8qWBi",
  "key31": "4KCXGAMC2PNK9MumVYqP3Ywu5bcgqMNaR4r3MZhugryv8mG7jUUQwuD7oxq2pzUVRo934EcuArAi6F5QdJbuSfgd",
  "key32": "2dUUhBCaX7feaeRJRZF3ftP75zXD1MSkdvnP6Gm9hjyCwwW5bWkwdjqJwr1yhBWwrMgU1TJonua7TN4hZvtWB26f",
  "key33": "5fN4PYhR3691UmQNRrd6M8exNEaYRctFPbsHq4p4poyTqeTrAkQnDFrPAudmRDQNRfFddTkxTPxp76KCoBQXzq6a",
  "key34": "3KC6taVZz8C1j6biguU7iFcScBo34NMvWq2yCCEofrwRbV94EYoqTLxcabUQ1AudsE9BQtWn335o8NWeAGbsgazQ",
  "key35": "5Y3dKZ1zdLakoefsZpjVTA9E29bJF3Grc3RxdSSTiBfk6JjwBCG6xNgQBb9tB9SpCaSTmQJnLWjVrH7g8dy9g68N",
  "key36": "8aQ78cnD3CCtV1zwXzNLeYGh57uy48bZHqRa6iav42BGaWMydTM4a8cwKFv5RqFdTZ7Q6gVtcBMk98kYqhWtCRw",
  "key37": "2Bpn3T5ujdiTJgZySwdst8d6uxKitZxJrzeLnuqPCzxG5HLP6sPrua9yAbk1DKebMf6HVCJJhswT8h2TteFAvCQQ"
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
