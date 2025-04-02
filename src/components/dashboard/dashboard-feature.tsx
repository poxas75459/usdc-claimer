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
    "5seeTi7rLs41kUAVtC37yBzCCbdgca8VsPKskUtcYRav5q7fbMJPS4fVPX8UdrdphqRSawfCSYJgHJhH7LFqjtGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2br3UJyzEci1eUSDA719LS42yjuir5USC9jSdx1W7AZjqC97ZWjssavDDpXRbiVVmcWFwmeXk7vUpRWtZsRFhamN",
  "key1": "49KrpvGJUw12yXkVEWACHZugMCXcTbnw3oCH8CMzeY9W2qyVqwPbts9VfhmKWhCtv61ot9WnWjekcXH5PmZ7P63q",
  "key2": "5Lck1rN2HU8KYdR4nvhtVeSwGSoASEMhNJZy9Ryi7ZPox7AD3wNVk31RNMhoWyLZScP4CUeKZ9BJGSzFhc7aau9s",
  "key3": "3W5ziD5rUPKQGECQwbkD5cTgbo4g5D8aAHQE3pkErcTFYSV87tzR1XVmNEHEvHwQjwP9ArYEFLWj4PNmJToSVg5W",
  "key4": "5vgJ1PwZhTymUh5LfxeGxX9pc8LBMjdmTqjqodaBm6TE1audKSbFUToE7SsA2kFcLahnXegTFTpXVVwvp3moavrQ",
  "key5": "5LMYJKH6XRgjbv4UTfC3FDFcjg6UmzwLGWe7YkiMzJv8t3NcDVnRkb39YFdLixU42u2CfMuabUP8RfivoxPeBrwB",
  "key6": "29ZddqpwR5BU8eRyuBYPf8C9QNQZ2ruf1YFodCaF6yBd82bFgUdCNevQecZ88KwbPa3xC3tTBbU3S4WGKvLNagQ9",
  "key7": "2LvUwVQQaZM4zBVqa9GeQdm5iHz58o8TPdYyDN9Rx1hEqoMLod4hUtfgWxH21WHwrjzzEqr7YaUwiN7qWAUZVHcd",
  "key8": "4xu4fyVrZ9pqjCwJ5ax9eSMDs6Tp42chWWny6FG2iiziQcJ2Y56zoehC4EETRBC7PvukswcBqy5GTiznVCAR1QwW",
  "key9": "5ozzKQwWRv9PnHUnZwsMwKrbaWVhzTHZwZhqxX6kYJHq8LW8PmiVDEYopxrNdpUnT5JFrxtFDWWv7kjbX88P7nS8",
  "key10": "3UnMszucQsZQZmacJLDL33kMvnzfUxCPU9hGwgje8jdfJeUtkLtyYui3xnt56cWBgDkNN5MHURRT2y3UMV5dX2kT",
  "key11": "33Q3zcxwEfvhSr2Jvniz1zsashZD1cMvpX9UfaPHszn5reMRr2WfarkddrgE3czFthwL3fYk632v2DJUhH3H5Vo9",
  "key12": "5XBskE6X6PBrkcMcWaS3VMiEVqeDkwKTf9BCf9WrSC3DwgFy3rbTusfoUa8DooTETCbfwfw8dECXboGYyvPbPRtz",
  "key13": "4CEHg2hCmM3HJJEWXEQGxwPMFjHsYJnyzLD7RGWHxToowKwqv5c4QwXj51frSLioX6Fum7K6iwgz2je3c3VAghHH",
  "key14": "3C4PVi2UET8mRebtd9Z8Pqt5EpVt4dR8ufja4hEjTwrY5tENi2PzbKkfwkugCxn3z9YV8hoAmyXBvk8wd8mEZCGp",
  "key15": "5UUvuMssHJNExDY8oEkfu8BYkyTrYAmJ94kT4URTu8j5v1qw64GSV9zi8ia7wT41mUba3qMk6UDZLNFfioyvJvwg",
  "key16": "4njASRSh316v2wT89RqYcjfZMUjUwdRmgthEKkjYT6egdFSKQFXc7RNrmm35d643Fz5faDXeZGFDDrFoEmiG3jak",
  "key17": "53mDdDsNSZae5RDkMZAGV3KYxJvPU3TGY51QnEWQ9Dnd7LsS2FqKHFyBNNHXGCJvZWtHJRDcKBpYxmJ6SxQvRSNS",
  "key18": "p521u2ux9sX3JB1G68n3H53FZP3FLFqFoRqmTdUkieeLbTqyiSCfBEVbsRP3mdcc2T8pvmAv5nwyRdnqT8rhSP6",
  "key19": "4TR446SVd7S5ZpvtEdNdUGiQMgFukshkimtSH3BM7fKryhaRQg6P5k8rnqY5nZVxK3XSoDS8gsbqojg59rW9YUYQ",
  "key20": "2njhRgucWze1mugAtgNoLEZEXFNvW6dHwZZyPgi7DQBoSGeeYYaJJHz98rRLJBCAG2nYHMsMQZsiTyZ2X1Am3ppk",
  "key21": "5ppxTkFxhe33QwfPV2DrPguTnCynvSeyW727gHsXMYXd2nKkXsCK2EJdAUcybqCQFQo2FSrMkZn7LVGxr28JVVWX",
  "key22": "rthVyDGW6X3WRytm9YyKfQU1yzJtcBWbfyfbSZqhZA4GVtFSMC5pwurQVsJL989NWwgkuHxgGpgh87wiFe6vHP2",
  "key23": "6m2v59gkgUW3TXwW1YhVKudmMfbBh444bQvwGbEa2Aj9DEhKCAFne2jBLRtjH3AoqzCBmBgPRT2buKhU7KPucN9",
  "key24": "4TsfDT1htUXiUbwSHgGZ2yGsCUvZTnBBdSm9ZGY7g3n9Mg8K3ygUogaWp83N37rjUy2MBoDsVVBTwP6rD24bmrs5",
  "key25": "U8edNEmntrFzanR8aXXfhMHF5YFWgyvYTaVKrVohSVNKos1111pDDjz1TG66L9rXa649NUcpTE7XiuupuH71Nmu"
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
