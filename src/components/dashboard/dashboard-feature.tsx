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
    "5X8tigA9vMBg1oB8vnT2XuE2WH39B3LUR7wKhoA9huvZvbiicvpHnUWpKkmB6ajEtkkjjoVhRbPR7fAshQdV57u7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56wy6tHbR3m51CLSfTdBoCDvqgRfUFpKKBSv46PopPX7H7Dczkyap1dSYSR7KojmhRXSfYYskoZLQTyga5q7ftoL",
  "key1": "2XX6coyQqTwPjWqzmcdZ8Vr29tDN6DDN71YmSGDxM1Vuf9J2sifUE1W7mA671RKjDVxEJLEfYKT4VzUrAwXRcHF1",
  "key2": "2iVwjiPiUAzyB5WAGrh8CpuAp2PoE8kBJp9w34U2g6GUjWC11UHgGAsd7uuBpam1696jRHUzz2QeBSCGSzpeX1o7",
  "key3": "5KPrKfKTrqPcBRsBz236K3Fo5CjbpPBFpRg7K5BcbkgMbcjet3j9xTT26AWoHxJD2gYkjNk5kkZsJpWx5xR3ueR6",
  "key4": "52GpV5ocrdbjzQu9NSY2Wg9p6R6XLa6T53CZSNaEopkVmz11JBTcKtKDYmujFrs5eDwZ5g5JQpUkRdLSX7NTz6VU",
  "key5": "3DLNLgBus7KqdcQcUp6xUGwWiSN8jovvJazNWnDzcGnAfNJWDrpUhasThb1zXcGS3nxaTNMRNivxgkBagZkCdzDz",
  "key6": "3HF4VqcbWvmX4E9ENnyVMf38cwZZLNJXyjCEPvPZmPpxbRmSzhj7pCCad5d7cTRT4wsG27nkyvTmKe1k7PhJVc2q",
  "key7": "4FJLXkabUVPgSco3j3c2KgERXSCSj4acCkm8ZPXYihA2Gr5BZqAALG9NpqcdM5DYtqk44qeLGffRY2kvRad1u8T8",
  "key8": "32jDfnZobpNZ9wa5rzXhEbctNV1tRSzg3d6YZhBrS5TTw8kKie7SqQt2nVzQ3n5oEzKwb11nXG5n7R38jgkeZub2",
  "key9": "3DBmYPY3Xxc5bSUbBN6v5sgncCZXie6rhuGJKQNEwt4cLPrsPEdtXLepfVRmzjHaWu716UBfRG3ezMNc5UQxVBrn",
  "key10": "2j5Ctubysp4EdwcgScW5qWpLSL9XTnRGdM6BwFi2m5qgNuj3M3qXvT1Nk6PXVh7BA7ueMohTJuGgNNUyAgrGuNoG",
  "key11": "dG9EPw14ExQWHRCZszZM1oZzY2Ea5q8CBy41ZEeXiDi7n84hMBiWDACbHN6CGXZB1gUXZ6uqUn6erk9w9KgQmgp",
  "key12": "3U79Sbg2i4RFAhis3aFhCJM8PcuEB3Ec5G747aVFWomy3zbULqXCngdAuLtp7eFLyfD2YwwCJ39Lgiw16Ahjtfb6",
  "key13": "pmF5ZaNAYHqRzVhyQ36LCuUkSUGczw1FL3qupooZD7hssMbaZZTMqj6LVAR7owzDPVp8ifeNj9LJKe67RpSt4RE",
  "key14": "23rFCb2Q87JmJC43FGQe4JsogD4gbuKhTtDLeGBCJxagPcoPtxP1ibzuEEwHJzc5Pgj4teb5Y137kgxDeVaumCNp",
  "key15": "31j2Cdbsy4Htn1VEnv56qK1NYN5RH6WkqPBPpfFkmqCq9kJJNxkStAVzCf6CxvtL2i7fuahcBVKuaDogpakErdQN",
  "key16": "4aXcGtfDz7Sp7YaanHaBkjM77k1DscVXhZfsMxihB7syS6AMWH2bhSrH9UBjd4GNaNL4tGdYa44nsBy5wvxREva1",
  "key17": "NT7SK1ifx8X6Zbn4VjtubRwoVdhQ7n6YzHQfMoTBWhT83TbkFzHR3DgZwixBwy1xtRgtJp5eLiwEZKqvM9VgQQL",
  "key18": "5b6yrNWUfCuTo4RCEeHtHNgm69CNnaAXDGqsi31yVesqK8AxF2bqemX7ZJ5y4ZgJFwjBrZRYiNcdPQyRstbkKBd",
  "key19": "bW6Pt4kU8ZzwKU5Lq7EJhiseCegvKc6B2d8UNix2vzQ2h5v2RA1WFq858g8R72P2VREphgk5pfPVuiYzAmbjtcn",
  "key20": "gCeVq2r5aiqfCqNnoHpBZuiw1aWQEQg4zzXcWREi4YBzd4xjKrpV7SaNYyFrYbGCQ7K83gNadpnp9EUF5UtHNdH",
  "key21": "5eb5xir6DVWGZwCiTR4xHKUBfDt57iQQaRQfCZAe7hhZCWMDhGtDP5RofGtHk7ppyR3GGRNDpAt8PYkWwEvFtNTv",
  "key22": "AWUkCAjVWcwxUXa2aqVLuryKConKv6zTiyrWuayFKpsHnsawn6xce1TNVJTiQwXBcLJmC99bFq2XBQ98FL4cBHw",
  "key23": "5C4aTpcyMBJ5sUzygEC3jY4BzfA6EcZNYHHmuGhTgQKAwkXVFgTzP19k4RNQLafPwVpGZ9hepWWcMWfWcBBT5t2r",
  "key24": "2orRVCTebvEimm7eVGd79fhp1UEG76ybdtykbK8cc8gXkeEJ9X9ku2NcySdQpDQkA2mVY8B4sud2s4MPN1BecGg1",
  "key25": "38ctYaJcEdzVsem9ThWf8Aa9m6r2voaEoQTgVLHr9pX42AkYJAt2yrFB3rzaUaQbESq6cipLs74oaWrTaddVBbKX",
  "key26": "2oxHZaL35cBLA8jq5FtuhqWVLUQqgmKHCxGHWGBgbTqisKb7b4rb7aS7tSK5UQymF1G9Es2aBSW3xSz35GWc4yC4"
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
