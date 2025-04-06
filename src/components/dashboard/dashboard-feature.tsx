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
    "5GTdjHLQpQXsTkRoL2M5QVC5dRBtYP2y44rGB4wktzKBzG1wj3TusJ4UEpgNTDk3wBVQubXaUdya52DoV7Stv1ok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KEdWWH5Leehx4b3aX4hHk2xym1wy5jhaXRBkjhxsMCE2qHdCyi3qZQcLFMkWE3o3G1KvHVKizf3pXrye7m5YggH",
  "key1": "eoS5Nf1XoGveYfXm35h2gEAVwHdcKGWcXizFKLbJtzvqFgXiRpaLPEj2VJ34Vkt3MZUs9MnmeaqznnffPeEZNVD",
  "key2": "3bcpR96K5FnDXYB8Wn1ScGmv6kcK2WWdvvZ4GDo4KUNnbryLHf2VAbu44BxA5BHoseT5XdZngM68rt4HPH6iny8B",
  "key3": "2p7oqDJGH4SeYrAfr8PKGTE4S5q9ZF6B7MuGz9SU7Piz7eoeGNP82KL6ffsRhVPMMtKJQKNkVLpLU3eU8uZZQ4Jz",
  "key4": "5pm7cGFFMJKwGDDy2eSsxPtD3D2pzC2mbXjeSADBJj7VPzeJSoV5JUuggiEppBLF2UQbXS7MwrF13dNNt6vqatzh",
  "key5": "4ErUYZQpVDm6pbyqzHD3aHf8XcmHuwKncsWAw6gvarjGnm5QLvPZ5fT4xQNTQiNu4WMJLjeG7KF6pe4Xpi46R68k",
  "key6": "5oKGkNWbPxooKHmfXN1TEcqsFa2Tmx6XqQH6UPCkA2G5HubHbdkPhszjhcH1F6yTG63uZQv3NTrvmdcUxjLHydoP",
  "key7": "kG9hirhWkFZTQUZKhyg7ZfsTCsxsCz4AXHdyvd2L8eLq5CSJwzUiGxGniVfY2o5yqqJEb33AMApwUxriXmAQ1uA",
  "key8": "5KHHMrQCHVCnynnsUFy3Mm7MaU2tvnUsKqpSa76zYUV1mKfrhH4epZrWXL5ac9Xj79UDi9U14NVVYsUEXzULLXh3",
  "key9": "2FUkvWBJZ2xy4CQnjiCQj2jpNHPGMiGwE4LD15SmrP8Gp6pgSEJEBowDAkUdLeYcBNSBoGmQdZSvvsmFWVTAH5DC",
  "key10": "xZYHo1GE8mj5B35uhu8ncwifMC6vMCs41bJxYEfrp6MWbUj2W2otj9kF2N8RDoCiebtLcqZa5RKtF3wGv7NSHwy",
  "key11": "2ZydiDbxV8YMwareC3BNmtZCgMW4b42xiakKjWJk9eYRoY1xyV4zuE8emdGAH5BRhD5pxYJpDVaPSeWzDJNKUjAT",
  "key12": "3zi91aGwLfcXB6EJHMmyVPt8VTycX9fE2mc7ThU4zNJbvgwjtMkwEUBwq5DaZTAYTenRH8uE7RYo3StcGT2bXqRC",
  "key13": "4U97tt2NhzFRQKzMpwnoFJSWG52WUL83grFGJ3oeNr6BTKxx2nZ9oJ91ggCaNjx8i97PhGkvXTRjaaLih78pdJSy",
  "key14": "5isS6V4Br7zPzTim4RXovEoLrTtibEJt3SzEmzseJKXBBMWGhshxaCrVYYYtamGWxz3cuZxEZosvU2DYgPMppJFg",
  "key15": "34AdA31Dr823e8RNsFVpdjXtogRJMBMNxjar6TALCoKP5FEmW9bCKtSyoBXUErkMBst9xbxKdG2zeToJT3XKxd2R",
  "key16": "AvGPruz2EV4W7vQJVKwDC13JDVsGQtZ8d5Rzx7pputUKRFc8jLANeDBnxME5vhHKQSCGF8Cab7fkaJFsL8kmSQf",
  "key17": "5t83CA74vogAqQgy3Y6CgB5cRjitBfjKonwTANVZmFvg8WwzYM1dwDUkbyccL6DS2ahykaCspxsJt9aHBaZ5fVuP",
  "key18": "3mQ48s53wWmnZPyf8MytUSNUc5it7hTDjhKDZMaV55GsMVbHCJvDk1NqcPYJNtu6ctFrm4JntQku763Yoc9F949n",
  "key19": "RjiaYvg9gSgu2RbJy5synNQBKRWpYkC56ZhUfzMpNR7HmuPJzBrVmiqguo37zdJ7URPWmLqim2mK8LzwDacP6uH",
  "key20": "3Bi6ur5mXLCgnAjRA1oM9TC8nFYB69TLJ3EduyBXKPgKDQeCuyuH2YTQDCVFQAEx9fFQzAgHKCiJfsFqringSPEg",
  "key21": "65hpVXVAFrcmWCBwCV6Aq4q13QFp66jCNAHyNGtndJepBxgEkhMZur1pkWQn3pdcuwxsXYiD62QMbTDHHcXaZ5kq",
  "key22": "2biwtFSvn2Lz7TzEv2du4qBX3uwaBE6QFZYfSEigAxdkQ1EETdatFznwihJ26YNeYXr51kYkwEjoU3Hk8cRMwqNV",
  "key23": "52z2HGGYTpbJ7hNUSEoVtWwDxQkhkYvjTWtPi24jmpozCQDubeE968o3RfZo6vF5HooFmeByNUjXAPeexUQZWUf2",
  "key24": "CPi9Z7SkAzevrerKzGEthnUQuL5HbFzdLetCMVWiZScBxJBycm5R3yUsXao7QtGkm5zSyvxYq2DuP4PwyeipjEf",
  "key25": "2zEx8X3oPU7nQNHrmtsDUchYCJrGS9L3sJ8YNTZyM6Uf8DpfnwRGw51rQ2xPZ2nXQ3mCJBt3igPr7z3sZkh6fgBs",
  "key26": "oi6gPnr1P5uEYpufqBPNdLLjtmVZqr3mY7ocEmmVCujD6w2Ep1M8UvfdGTV7LLW9F7y55ZKNm7gHZjeQC1HyJnC",
  "key27": "3Lbpct24RbTC7F8ViGschgBNzvGyz8qiZ4pQsaPe2mkk64vo8nxRaTYMJyEKoLwwtKEgajdfEAqjNypMPdN2TmAZ"
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
