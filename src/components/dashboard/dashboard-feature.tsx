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
    "5coBvZXcRK4UR61ppFZyq1ad1iuLw4RevJwFPT8w2uWiNHYfauyFAR14aBFSJPHKVPvvm1qHxnh9Gmq53DYMQBPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u8VLX3QDwFUDFe9bq8n4sLMkh1PtJUXxeFxq1KvKmkoQkTTJvq1SQ72M7ZYhfCs1SaibMNYf2tD18qCDnyiHM9c",
  "key1": "5mUYApyVuXyEM4qfFDgA9JHxqpRsZNdxByekkXjZdTw65gUjSnsD1CqUKm6tD67RLCK3etaeZRMUtc5YqGff1UWr",
  "key2": "3CXUKapQBoGLPtMhG7T7T81sdLvbZzGp9gcHidTEqVtoLxaL5ajafitAf2shSo4KrwUuegGADQi4pDJx6SFmM3tX",
  "key3": "2FJgxZf6gF1NfJbVSoHiaWWA9JpmRZbnQWbQqjH7vJuExMj6gzazJ3vueFN4xT9Z3Aqexz81vzGwD6EF4hYS98BA",
  "key4": "37Cgygyay6FihBecpU6a8hzN6KEjXkNHKS71ax2HLa928HwvsKGPjBq1SvR7t5X39BmutowsXLuqXfbkN6URZqHL",
  "key5": "RQkTeuMvfbu1473D8ePtKpoQk3gRVQAyBkorYqPWnyFDPbhkVhrPUhPhgYX1ayiKYbZcrotxS4VCiuhK7HASVMu",
  "key6": "5eBgeKfiKCrV9WB1Ep8WHbxVmGVm3uoGDDLePQM2mMQ3gwmswri768hm5bwHNtXJrJtg1hxkVAuesmR1JZqXJ9Pu",
  "key7": "2P78HXAppb5FLvE3X9NPeocFjdCFYso2MD18wxrXdBBn8edqshWJh4Nux6qLAPF6d6NctAN9s8ckQcc6W9nDLTWZ",
  "key8": "4acxuLcwmjvsdzEXjyBAAxHRhyWUKaLgDExkeQSZRTS3hKLXw3kid1sYS3EdErSJN2igGt1C3nsztqExoHBBsDYD",
  "key9": "5QYeJX7ukaSTntsuDp7XQ3h6xspjxCgDq4APH7J3CncNp8i59tAcVqkwreDmLmDPszR3euYY1HmaBaKhpqT3eFiY",
  "key10": "bHpwGMt3ewkoy5HMEmh7qTgP7oLKkEjiYZCjr4ZmK1oYDCMunNMbx8oYW7WSvM4BU3p7wH5Ew7QzYu5m2V16Vi8",
  "key11": "3XEKjbEsbey6uQ1rETaeb7fksLqUbFmtSJne9xs1RJuLgZL8BvtjKbgftpCsapDU5xaUH2JjTuzRyWRpu6WfocUr",
  "key12": "3zQhxkWqdUUudK3wj7eR7nv2v2HQsEzbFg3Ur6s5BBj2YghoyqqPLy5jtJSzhBHRx3fHpnbo1GPAQEF8F2o94Q7P",
  "key13": "nDJ2Uxd59UYsicT8r73VYbXpB5xKVCkehh3UucjikeD1rpeC8kKr1FN6tjJM9HJj8ED17LstQKPaBeDErnrSSbp",
  "key14": "2AGMirq29EeS63YAsheaQ1HFX7anA1ZNu9ZtZCphQckKz1ov4KdggcNidUiE4XSoDvfDHHBmN9W47sxHvQh1f3k",
  "key15": "2s3K4BKPzXbbuCAXdZUtD9egjNjFuoYyu7ewqg6XiVtJ1H4MEK3r2158ny535289kmUwebyVF5yx57z4trB92ZbX",
  "key16": "893d58yUR7p6t2TKYF2MDgnTQRUdzSCYvowYrYdM8WRrhASrk1j2Q7MNAj5VeWzZfyfH6SQF65riiWYnDpHpnsf",
  "key17": "4Rmv2dYcxJEZHkiGpz3tCTeArzEjnhYaxZdtKaJUW2kovhPX9WNh6xK48mzrrjrb6J99PN1pgFbFXSz5y9ZuFaK8",
  "key18": "1yMpogY1FKn1gnw4jT8ZD8F9UsmBDHASreQNxWbjVUve8tnQPZYEnhd9DoXpc2XhjxWCeGoHythMpnJ1QmYu4VU",
  "key19": "4DxhHdxNmigCbMK1FGaEMefyX7dUNXRtQY9wwcuWPZcqS11QAtJq9CYHcicGWGHF42yFZSngQc5QurXn6ZEXPj4B",
  "key20": "2p8kYeAtRcXT4WiY8xCFFsu5EZoaGRRjx2Q8fnQKqgaML16JLxRwPs5ya7etPTPp3zLan4WfYuTeRy7wAXabBZ8j",
  "key21": "3EDHCMTYP3fZdbScX5unoo22LheQuZiThAsFvhuqP931juWHxk6fTmmzA3oS8QH2G4rSwa42CKGHWjx4muqXqFfE",
  "key22": "2m2QJcmgpxcB8A7rFdVa1MdY4zeq9TACzBFCL6C2PR2KeWeMtKrhzQfLD6zJgf4EXGw952x5CaopXA5QCfuxmHua",
  "key23": "zw4RHPJZozbcYa1NqJeQ9hJLa3myTbzumKzbxWvpsaxJTL7b584XKfq4LeV2A9h4ZQYWTCD2W4pAaP2jkbBcezD",
  "key24": "2Qcw6uiqBM2SnVXAVijsJ7Rue8UqVQswCbUzbMN33ya2P3JeuiqLybZ511QeEjzXUajKV3Kqr6Rr9rikBd9dR4ZC",
  "key25": "5w2kCLBSKT8MMk5AYiRbjhHevQot3XReopxfbhxg4Da8LaZJhZSfkzYAdebtnjHgKaKrtskNgmbZNhoAxD44wSUB",
  "key26": "4QE18fSQeZ6GJC1Xfu2Bkn1WjyxgW4NGKPchdNicJnTmksiEdPj6KCeQn6q3RrjcKzPXzTyQ5XQorwoEKj3JVMAS",
  "key27": "2KfsjFbjFkVCAMfKbN4aYcgTsUFPA9evyPKMg1jbV26PbBJi9YJkFnFd2N2K1GpMGASd4wU5BkFfmTBS6TEfVmZ6",
  "key28": "Ga7zykhMjznRfKRefycx68QHVSf5jxtA92FgtYovESe3jgKhyVCcfmSwco8dTtysvAoMyH5cmyYHkUGbpSi21fK",
  "key29": "waz61e8QhEv6Tb5Rud96YMXiua6ZPkUGMYAH8J3vJSRTaHgsxmMym6e8F4FQGTTnse4tJjy1z6rSBNxoSj3oTVz",
  "key30": "4HzPdBSGrURWMCExSG8fon2PZTH8uNvVDt7E7PYbbU6PDrYyZgKv3dYe5K9UggA7FAKCmUJKwez8SWcKtJVQcqTy",
  "key31": "321QXE5mCxvbejANryYkqLsvEWquF7Rn4wK5Pvfs8shx1CE8GRdr2tLzpdN5gYcHhAjq9ew13ei1bSNfEj4GZntV",
  "key32": "66zmRz3Bn65j3HxXJaKm7RLfmwq5chepdRZAeAA5SrBwSd16ysKsKhnkHt68EJBgFo5iT7R9qzjpGDqrk6MFj8Ey",
  "key33": "4Qoh1aVEE5u4eMpf3xpPqMZoYMT6d6eb4bDmHEfqoFRMq95HGzzqvysET6oUrbtPvAvsZbdifyuD9tVaKUud75nH",
  "key34": "2SPY1b14uM84zKhUevkk148nBeuAdRDPftgUihucVbBNmmFeci4qKF3xM5qPKWeE6KGkjhQ4bmPc1xBG6TJy8xCK",
  "key35": "PdLUJQ11cSprDmZYbmvVx9esMaweRfQLootbYrBL7Ld1tMrZuoWFtF7S2NJWckZXbTARoSxcaanrkCLLdLoh2s2",
  "key36": "MZ1XszioVWqetjJd71aYcqiUKvpnVXwGDipoXyk7AbpBv9AEp2BT6Mxhd3jSSD481QjBCnvMS3Y2T6NEcf1U9a5",
  "key37": "5K6SSn6WmBgvnQa2VmXYv2E4qpcTPxVVbxHagfumsN9dSfsZVifFnBr7UVjr4CY38J3mZZzgSNVfRRsLmoJBLL5y",
  "key38": "2w8DdAFjovUurvU9CK5MV4qykXxkY4UwwY51scSZjLm4daNLiq4NKRQQ4WWnpFN1Gn3ezHWysbnV9vYT9iyJkN6A",
  "key39": "2r2oyxByHyz5WUxc1uSxmxmuy3LsNkzpQMNBWVBjrxHzbF2apdgAb3B3ujCUicmQftojJS9geNEhfVV7Ar7EwYox",
  "key40": "2MxTvbvC5sifBVt8snwvqvgTPewn614ffpLE1Fy3oQJ9ZFHzcuk8br521ZutLi4QVt11TDxEbF6DqUuGH4pg6jfe",
  "key41": "53jmzsPBarbDj85LerJnEYxjcs2XJ471R8XhW7BCqedMQYDSqQ1LPTwDWvjcJHhbmfRkgnA6655ohScXHZNykR48",
  "key42": "34cRiWod5HRAe5b13EdchvZJvV65tCuHDT6kfFTwTM4zKKGB61UUCJkFzMBP4VPERsSMiAiuobb1TEQtJApwpsxa",
  "key43": "25HSEFWYZCre2S7oExbZgjUut6oeEmFexjdFMB5vqNgjMKc8TrCY1Wx2nxeQsoeksKVGUVdzngCcGamVL89QAQUr",
  "key44": "4djLQQBaTfqFvbmBajCWcm8WjBQG9iFMFm83A3mL3BvNTgdMocFGbhK36gHgFr3RZxxetMo1r5E8owHnLVLpxPmm",
  "key45": "5NFhFNGRTpAXUsEHMcNK6ScMzDgFNKDh7hektqmFyrQo6uimMT2CgLeVyFDnWQpQzmCw6aLS3CrSyhB4ZoJpkonj",
  "key46": "2b5p3eBpNbifvSswSroUnzcgSQ84S2yBHBhn3Dxh4mpp1B1ZrnqNxEZvbncnB1spvoyMRAcR1ntKmqopKvzbzPVX"
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
