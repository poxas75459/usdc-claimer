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
    "4riRC7CoTHrYPXA2tAnRExyfLoZAV6Kt483CxKFYrz4gzYwRMrjiBL366AZXQf8JzHJESoGdcgYxJStwcQP2vkJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3thjESCh5g1NLuuLraLfi3Mbyf9hZcc47kieDXUsMB2g7xuXvyp3kLqGmzRAmdzm2gtYsbdBFDz2kAUWebRufd36",
  "key1": "66dk1hv9DUeyGjjhbs9k5JzqgQYjyfxjXzKia5DjkpGadU2X3TgDxEW1CJrotWJyuhbWEHkN1xHAZQs9HsFERqr3",
  "key2": "2i5jLt67joGWqf2w94vGspSyYHTMab3ywZ5DHtLC4eJ7AacxV1UgnL9xGrJy7inkrT2L3Z55TzaSKmRcb5ZLkiMK",
  "key3": "2wtaYk2z6qZNjSise9V9vHByqZh3mdiF9u9V6v4s6FoxnQbteUTCZQ6F36q5VFq7eGWqVBb3cTGoCLkL8pNDB5c9",
  "key4": "45JfAy1juD15y7pZAnvKCUBnajzuFaJgKrV8qDFY4ZRiaae8WM3p2sWPM5d1Zv2WKhK1A5iFwfZEgwaEgpwyqckj",
  "key5": "3PxAwf4paA67FkZs7BKA3NCALoRPxLYqcfCW5Enjo1AwnfRCUCSgB9z41xXgnyhZZrzqE647R9GLPeJS2DpA4B4T",
  "key6": "4EA7hm68h9nSKjVohVh8hrJj2gNxVygbQih6asUgyejfeLYwumYufLsbwQxm521F3XmJ72gB8nufZRuiFEuWajmJ",
  "key7": "3jv7C2r4ZdXgsGGtmQDLfUmoG9dd3u9TNoWrw7kKZY5Vhmungmr3qmqb7a4sixCWTv8QtWRyY66cRTiYsvAEFqF1",
  "key8": "2xHhtn2x3VvguSb8nFqsubFmcQTYemU3kPpRyGiifuztBjwhvv5pwvZuaCZYRe9tTfN3yAS2G2arjZaWbY6USLPk",
  "key9": "669Fp7sHAqZVWuZCiHeqfRXUHaihu8fVmnY4ZweXqQdoL8BAfaFXJ8W86rw9z3ruFzV6q5cEYBkQqfEdBbLxQuWS",
  "key10": "2EJQGWwiGe3Cw7BwEXWESgAmjff3hxL85cNnLUh6oudNoxa3cns3PWvjnnWcTKu5i3P3iEeJ9ieQFRZM1EaevEFA",
  "key11": "2oeYCtg6ojJQny4Agh1BSuYkXPBi7YofewBu4FuZ9QfYczsv2WowcyH6MHXh54LUHfbJgdLQripL9PBfKqrq6rvf",
  "key12": "4VA4JjQwBp3P6cb1Nc9ZyjwUFzaDbCbbmndkeDbGPi3XLRqfJnQ1dqdMA3oUtpyBiMbHT41z41B2BAaiW67Cwo3W",
  "key13": "3v4a4z4Y4zFkHZNopZ8qBTajAwwms4aPF4keK6hfKbf2RTysJNr9VSCepX1ep7npR71PfCZ1ZK5jcu5u8CAySGJW",
  "key14": "4VC2WVgoShC6r2MkXQmoLoQ5a9dp46AVA4CG1oBbrzuxxVYJJevhqf8mKzetsJAvesVaAesY6Dbyt4vpaExt82MX",
  "key15": "2xP634VnjifkNXHhzKvNe3tkFLkf2XHi32qCayAbqHKN1F9xiB5c4nhWbGEpYsp22hy4HMx2Qf22mwbJbABxR72Z",
  "key16": "25xR98egpkR5EgVGRg35eGKnqZey6SDbuVELfP2YZWvXnLA4dha7Aas8w6UY7aHLXko7QgNnsmeGKQN6vDPnPrkJ",
  "key17": "3AQ8WPMzwT7o5Hvo5jjYM3BV4qSAJ5oBkF3uYbCJwE4auKkfH26qUJK68dKokayE96rMHrj57UbRuc6QCK1aMAWU",
  "key18": "5oNLJLdbSfu5VGTZgrJ1SNdKL4R6J2b1Tm11pzgu3s7pW7ouXXoBmWQ91vZcvZFJbAYmkHWvbyJeEZoEDpv7TbRp",
  "key19": "48znubLX1Mw9BWLvtZQuJCXoRRCMg4VNtzXkRZk3JEqvmFVabHr5iWsTsnuRS2ZJFd38S2C74wGmSiycRZcPftoG",
  "key20": "49y72MQiEmoxd2AKmjtBn7B1SDeyZ5T2NtKVP9rse1h51xJ55oLMzbwkGF3TSpj3NHx7aRuBc1HByx8b8miC1WU3",
  "key21": "5ZMZrszxrGB4VKQxftQ352FCvcGhAHigTKrX26wJ5oDzchk2ZCACaR9NTXNGh9Amgc22npR8wPhAHr9csiHNEfxr",
  "key22": "Gb4e5qMF6yWfYNHbQJUboa1iSvvriNFGU21xmxya6Yk19YyPd69pgxyjTXDoki5oi84XFMjFSEo1uKepYw6FrjD",
  "key23": "2K4Co4YkEFYGfiFtqyWZpbFV8w7VicBvKrKxnbd7CVhxJ8fjyonW2M9Eetp7CqYqaVcYBDRm4AAUzKqjTjPjBjMK",
  "key24": "5m4Sfm49emCqZgeBzdgw6hfBsWiWnpPSoJgteewVeQHgQYVWMbqvLBnNc8qCw55iEWU7zRQA2n6e1DzDJ2SNKV25",
  "key25": "3DetKD3AqvCEew2599zVgzqaMgqV1TCJFp7xqHHwBCaPikaqN6szcj9eFL3CQE9LoaeKAGr5anoQeypQuDhRYkZZ",
  "key26": "53PyQyXA7SpbVF8ED2Ebj4L9yohM8EETNRKKuN3qq8cfpgENRjgrdTHNk9CiHDv2qUYiwKysSknToq4mccc84mrX",
  "key27": "2pcQ2uksWV9wrCfXBWprzC24xYJhF8sS3XqHKshxVYcNgJ4QZvKnKKH4f3RFNg4WUd7QBftrxSdVVAetTVMXhY5Z",
  "key28": "2q7cBWTfCZ6Sn1pgGLzsoTkcEwhi9LYXefE8oLs5PHvaSnaL7CG6mfY3TAsm1aW7oKpNPnHHyXmGksFjHYSyfjTS",
  "key29": "3hbKucvu4DcV88gADLiw3L8WQMy75LTdhaY9ep3MpfgSwhs13QCd6RmYFNDC4YBqvJAokRHcRQTMHGo4tBVjEWSH",
  "key30": "2mFqbFwYuaYoTKk2EWdPfbW3z2HoS7wJ2xjrVYkozUbieFpMZqj3HQE97NCtwDiEmv6txmLzLhFZqBrv4rGPQF2w",
  "key31": "64gU9vaUHdZrbYCNjCaxKTV1tyoZHr3A2TDM3Mwmu5uNA3em5gT6cnqBNFiFByoJsgzEAdNDDDUx5LgLKy3uQeNc",
  "key32": "4NB7BJ6uk7LgV9N3LhjJxs93jNckvb3CFNuEGba6x5X8X57t2K9fsUpyp2KMmuWMf1kLeUG5M6fxoa2YhgnTT3rw"
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
