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
    "4MJpcheuxHdhegF6AqUz427VE4oV2vfPEgPeseyoMDwVRMnKxiF2AaaymoWM4jgifFCanBfQSPAS1zTkvGmXqXgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62hQDGtgATdtNc9F1PXCDrMng4jWA8Ymb18Uwk8ZRqQkHhPXLLXq45iyQTYdfbtQXKB3zJtyRYvhjRzu72BoSLK8",
  "key1": "2c9NfUuQDsQAHbwBqwnyRLFVhAG4Fi5XTmi4WJk8EuJA9qfX1eUhYRpanR7vwaiCLbQ2osExdAmV6XAhFbVzkQKh",
  "key2": "3mSZyH6yGmDeXVmCPNK7ZMNmRKtwK7qrCuhgh5QfY4FqVtUywTTL73wEbTYtGoMeUaXx4ybY2oNVkZnmrvnkuJ5r",
  "key3": "2EDGrLvBQk7aAv4CSfYRuXsronUP5RK1nFcopYEEu3nG9LADa9s4KCRsoetnEX25ySakt8iwzpcieEPpbpf8kHAL",
  "key4": "2n62gm9XCBDZtQfEXPd3uEYpHd1VRS6szkJwkQWLbAGx2AY79U6GTqtoYhomSkwHEYhd5dCs1At45hcEjugJMJcD",
  "key5": "4yenQqGEzBBddNoQijeVk8Fdz2WBLfQdXhigRJXjRxgpV3JoH214tqSPUaeSRheya9qAPQhhGeaJo8Ez7TARSqU9",
  "key6": "48cmKZzTpcdLfyRdBxTwSmSs5Kn5M6ZozHXYLde2dBwSnRZTxYFtLVdhNQgK42Fvh5Zqp34FLFBMs6jo3HPh8X1C",
  "key7": "5d9PBeNzLxixpg1bNjkgQg2HBXrq8c1W6RcE4GbDEmT2fByHNKBL4omiP9YkYwWVgjeMLuzq2GSem3K2h5MrrpAo",
  "key8": "2XvjQ9LAX1arFKdbQSWfdEQgQivS27r3WDjrUzrYHf6mxrzZA77bm2gYGunx3dwygHKRjCsWNSKD4ESPk3TMTxG9",
  "key9": "5Qq3DtrifDBqvhd1LTusfEndz7SkvrjPm9Jc6H4ESY571miVYhHYxxcwKZRZDqBdD1b42jtdGq7cssEVRBURq99Z",
  "key10": "mGAghLKfPv4eec9tQ7qmncveFBvkV84YDrtirF3G4TrTF9vtH5kTfpuh9Gxha3kvH7iXjd2T1fSKos2ksuuCUQw",
  "key11": "4mQAfcQKpmKDVTVZFQ8cCGUJxevdB6a8rSfaD1upLxDd55g1AZJEh5Z9SELvWvi2feMD2E112XcjEKM6P18CBHnd",
  "key12": "5GTMf1C2mzUUkKe9GvK3dZZXdiwgpb7gCuDwdouUE7FwkcW6WsZ3orYLDabHUKF2vi8FhyUSD4V5QjNV1uFANRZX",
  "key13": "t8CtS3gKwtpLVhnRv6gS2SEkhcGdUGp8RhAMPaRq2B1FAcjWCVJawAMKLGHyhkvbAvQtatqX97naxZEhLKyCXyy",
  "key14": "318iu2H31Rhe16dUbpSXkrPuiB1zBDuTvRdE5kcCFxKQvnnFwng91n8BrpJXxZnAqSCDCZxvUboHVC4XUc5fwa2N",
  "key15": "5VKRX5RVj1eadYNP9FqZy1BxqfUXofVEHBVPU4Mjbe4gndQGU2QBKBWWDKXKpdnKsNVVuPseFUD8aUrK59bpGChW",
  "key16": "5L6UUsr8uibzJ2mktVVG4TAMEFQMveLBQCag7bwLoS4EWRFjR4dc9fEEQ8Hq3mcLdQKgZdGCXeKdCbkCrMsQwFpF",
  "key17": "3h1XEkFds3uceNoTE4zetCPNqEe9LRGbxXx7goSJ4giaxPy81fDjyiXQMnnczENrChUCDw8bW8qf1CkkHNwgcJi6",
  "key18": "3Cuj7kBDdbkX8LeJmZuaJw1eQPB5C2Fxd1DQe7NMnYwwvwdjSfkcXhNxeT6o1iHtGcoE3egG24cSRbpdkiqjAS2g",
  "key19": "NC4TgVdLxprC6gyquNaDHVx2CYkqkp315e59ybTzLfoUoT2RHRKFJ4CrpmRJQYxc6Tb9NYY37m7GbDWahHXHzbM",
  "key20": "2vjmTzLHsviT6nQrS4NbAxdTDZdiYaWKppiDNehdvEonP4xjRXuyhsD3GwrW7dc4hmF4KMpXay658hn5Jh5EnJE",
  "key21": "3jUzLos9fFTUYdmZTG5wuu45px16XLNCmjwZpcCphWiTbNoCikXyYHSMvUDEPhJWJPYsiEUxC5mZFLLg5jTbyNXS",
  "key22": "9C35GyPvo4CAWQE4xYTSrm9JNyhC7FmJU7D57DeZRsUCvsHFohq7YQBT3cRWkDwPsFLfmpon4H26pvrY8b6UcPS",
  "key23": "66JDuNKkV9rFZNAkSqRhyr9fYcnkm2wg9ChqysuP1oQDbqBmSS3Grj4HiJD95zCX7yaNFti8NPcCttLKmMMJvGqv",
  "key24": "2Ai1xDSYGdKuEJPUz72DkHpXMF1HF3hAM4eB9TNFvvPsXD7KnaRHS284bCMZxkn8GVkSdbEHNgFkxHDwJopzrwgZ",
  "key25": "5HPGxHiwBJDgWvGbrzEwtRUJHcjMyv4nfvSBzqdZLvNxvirSk9u6XGCU9g6Y5K28vjXBNziTdLB3CQxX4ZMTvKib",
  "key26": "38M8hk683r6XhMFydbBMMebWNQxk8wVMdL3GfQoq9NQEhpWpxTHXVKo3Mg6dfMg4wi2Munb2yVKZBhXkNAmFiPKb",
  "key27": "23wPBye7txGfXmbjBxj9rZLBUissf8tDdJJtUENvjcGG5hneAW18dQc7eTApuoguuZieA9Pf6ysq1P5DHgptMPcx"
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
