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
    "3FeCY8jHWtPEAttjWNVQ38ffAWMEsXuYnworurBneg46BMkPpQeBG9TcWtrSF2Jtmq5Di5qJSpkdFPKHrNAbhnGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55mfgfmdWFzxKTBMytRs3K7PSecxRWJwMJY9H4GTjxwSYjCbnPZzwaUdS8KPD99vbpc8aXUrndHVzSVmcBiozufn",
  "key1": "2i72aXVkLYH3Rrmh3xW6zSAinTuftrXZLqWLUHY45uF7516vd3FKAxPZDcwCksfZovSdTGNg3JaraGU6Rky83Sei",
  "key2": "26bApb6urUiLoa8YwhipvZwH3t2TYNgtsNnLH9RQrtgWpBXb6kQtnA9VRZYKo1pwwxGdWtgNYTzk594Xz1E8uLsC",
  "key3": "xgwQtWUeLB4yddifHr7LdhVKovxCwNe1Enjohe699WBaJ8ZWF5BYVGvZqYDihjhshUeqASdQKXBTqCizSGCP5cp",
  "key4": "5DyRHpVHrotkNX7nGEMvkac91tBPwfnGeNB3HRZFNNDDd92GFC4kehaBBDEQe6GNDhTdZTFkag5cSDPSS9GnLKbF",
  "key5": "5j9vMqGFdwKkM5ikx3K1naWRtuR3XmsKBc3nSojP6YktewXeauqt49nEajQJmrYncgBdaZFEBFkpaTHKEZD1bGmY",
  "key6": "2vPnyMCduUhLgqvPgdn1tbfJdHQukPGUJjxLN3vfHaa8pefK99FYofUVu26GktCDfRPgfotQqzE5EE8QwEqPpXuS",
  "key7": "24mC6uxpbkqVzBvcAgdSSSziV98FqmnpR2FoAVnpE7euEYAef3mAUAk9rv6zrQq27F5r7BHLYJRMqLN3pUkcrTwa",
  "key8": "ELqEhLwFN7gtvwkNU22K7mkeavQhyt1sJ36pzm8Tvzxx9kuf4Ee6NzfoyCAdSZWUBPbmWmAS8JxxQWHZrShjPyF",
  "key9": "4tKKMVELqs6VNHPGdHTmw7Y7UGecZJdu5pDw5qWMtEdUYzN9otzXgSmjrv6Jw5UypbBbDaxtR87x2Q26G77424Jb",
  "key10": "4MRHCwofT6a1aXv3CPDtLCrjwyeDmrF5AGhMWeU4jHKJgU21msYAvnk2Eb4jzLeyYwbudj2sUTQ9UX9rPhjrEYwT",
  "key11": "2jgLUMHpv5PVZ1am2wx9X2pLwpEfPEeVg9E4yiRRm4ugrKDuG77YUKghjHMfKfSfnLtfBjJFSeXnMctC1ovEigQh",
  "key12": "4mo3M6NKfWAZkKtqYVDnoCG6cVMVfCdrYBXWaLo8tWfh5Sad8Ws7gSYpQ8YgVEon4rjq76bTRVwvhVfynDpG2Yqz",
  "key13": "3dp1cSSvienfuzXqCQ5goYea2ed8ijuuNFZ3wKbdrqJVxitTSTe9k2bskt5aqr6ra323zQA2Z6DaHde2LFEjPtB8",
  "key14": "46Fx3eD2JXyeJeLer3HtvBgiTqzgBkkDrXD7yzuxcGaMgyrFSk56q9BaHtdCgp2dqQHpQaWAAJNnqftXMZbHSyB6",
  "key15": "4dnrhaLx5UKZA3FV5AzbKJJhN2Z8jiUUEFZ42mjvpehhPpeQY4948PcTYvxmoyxSMbq6y3KemmWwrgZqKSfPNqmY",
  "key16": "3WXNuLy3VT4M3f4AxSe72LzzgHXqpakmtpHSWWoRGgEiNk3HyuxzWpy1nDsQmXqCp65hTyrVRZQDBYEuB8iydRo",
  "key17": "vz5VWR84A2uginrYmLZFLK77QDh9RsMvVRxj4Jv38g8dy9hwakVbQSdirKQF2far72jEeq1r3HXYAThpFCam2HC",
  "key18": "NzWBRfmqocaA1ow4YY4W3Vf9KvKdTVfdyUurJo5xR6HzvHZb28k7HNxF72WTAzRNZxcFHEy6ADHfD6hkzKmoYRF",
  "key19": "U4Ze71cyaLQmchmsPhnZy7iFds6xvaWdNN1p94DXRqWek6zBkU96afNT1uZVEr8unENv9YA757xFDZzEZ3Qaekd",
  "key20": "57yjuRKoZFRqbju6kviS5gfyfPnP1Sj2szW476H7AFxStZT1vmcFjCCrxeaW9CchDUjvWgfMxfy75TzxrQDAgmAz",
  "key21": "3H5DuLzhyTztrXhEeGd7qcaDWpFtoiNuUFNXMGYpbrnRUTDrw7axLwXho8pMeDv1UDPh1aqnTqUmFchQYaLcQaVD",
  "key22": "5U5DSQW1qSeedvQ6eBmuJU2YxUthjUJN3qf75wUS2hNz6N8VEkj4rQmcdGNFiAhPvPaxHbdMuBE67RsfWAk9GA1j",
  "key23": "tANwMff5cSdzBrahRsqi4cKr7fAjUn6i4sJoEGkKfVr8TMVvNB8JcgD9LS9CxJYaZEeVsTNGqnq7MYuS5hPiabr",
  "key24": "3ZTPK3xk1t4CC9c83W5FKfZJRH4KyfkcEu4J3sgHZbFdYCkhoQeAxgDg7KzSBTzbfbEvduke8ZPcBbvmTG4ZCwvq",
  "key25": "2SkAPkDwYdyaMTYq16S5oy1xLfxmAWpg66zZWfboizi3vX16vekjggvsfSvNkiMgN4eE9YVRgM8r5H3szrV5swqy",
  "key26": "5Nj2Gv1XWabX15pSodgG2JDDLUAe8ZU2ugAbCzkhFyeTa1HkdG72pZEeamrwaze1AAKYzRW6G4ZEd4X1K9QFyrth",
  "key27": "3Lt8xrSq56tMsczsd6pg4qTi1BLds4zpY6YZQb3bJyx1myYtyG1gbUBR1TGJtWFEWDAfMNY3csvvCyR4TgFHW9fB",
  "key28": "2zk75VgxFpuVwLxjKFfpyTnGkUDArzfdUFoUqZp7iN3PBYTCzcLF2A1rqnaRZJdj8XqyPHrqJHLp1eWuuUy7bTqc",
  "key29": "2v7HJW8d7fib4Q9xayL2GPPrsnNyTyNiHMMbYrxdSszU1kEhWm4r136LnTEwdAntt4r9i1nYHY79X68XADCb9RMA",
  "key30": "2DmYmURa77TiXRnR96UPqh41bLzV4xX4p2JLYGjW65AtroNrfkGFwJAArfhAYdY58y3Juz3LsZtv6EVnTmgfkKaQ",
  "key31": "3pkQ7acbdaUqvqB9kxA3xxgrhxCxi2PyqxpGqPqhU3TtbCEKaBtkvCcu14TM129Jtj8fbVvWuuKegZK2j7S6UVTR",
  "key32": "5HzdLrZaTMKbDknxtdbAAsmaNY1yk5QxaFEWPz83X23FQbxA2AAPB3Q9qfMacpEFjY9iKUH246Bg5urFEqsGgJFG"
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
