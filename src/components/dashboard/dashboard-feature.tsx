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
    "8TMHw6yxD4GNfuhhTXvLv1bPVt861LzCHUFUQgcG9VC2ifybLR8shWX3Nb6MkiNcxn3AEiWg5WDawcJmPKGyiRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fisDj14nFuhnvjXw1yJ45VnwR1utCRP2avPPstTaF8i4aWVrkbnGAaK9JKuwiq44Ra7quvj7dLotwXR8CpjPf88",
  "key1": "3reebEoLqktZjYANT69JVoTZFFBz7g5CaNKnn4ZxbnghTbfUSmoPvhCB3CLYCXUNTxNgLQ3H8xxhNnXKwmhpx8Xb",
  "key2": "4g1F7AV1h9Lj2bYsSRHFk2GhpNpYv7gtNvsuYRcFmjrHMrehhCE8s4wDp3LaqxNyt3gNjFyBt9uJYHbHDW5Rtvm9",
  "key3": "5W4Jss3xr2tVjp6nxvPYprEjqEosWPsnKu43qZrZz91rrwzCQiYyk1rotApjQjJpDWZxM6RgfrKwY7UFcnD849tD",
  "key4": "4Zep5UHekdr1EG4kU9LSFzQhTr5uo5EzkAzBeZgaab4d36xkntUKCmx4C2xGoKyeA6STY3ZktFCaJTigfMpjQuxv",
  "key5": "KN43R4avz2KT9VEpaLsWV61ukMPRBP7BMSfdgmHf2K25HYnPjBCrEnDibRXWNWJsvJ7TSWBLrVLUQZKANBZh3Y4",
  "key6": "2bLGrWesoLZZQyiR16FWmKKabcxa9odHSWwtjPH66aMj4RHXGPzpFCXp3VNZTKMrdZsu1YRK61pPMLkKdoGCUu1i",
  "key7": "5YcD8PBaumzG1PUvoYtSjUH78NdKxp2tSxAMEr7C5Uf3R3o3fYgy2y6Bd3WgmACm3xXcYQeJsb57rpai5c36CcK7",
  "key8": "4LZyL2LkSEvj3fuAyKVs6Rmut2mnj86se3otXEQ5RzUU44Rp8E428PV9kBCxFTbQYGYBa9DXYgd9ed2ChUzLNYVp",
  "key9": "5g5MnoNnTf9roaxPkunTsibjSYTPX7mFECf6nCAfaiuQFVTwdEsp9K1UzgqHg8gUDJN3GyBZdx5Ckg4YnSC2Q4uF",
  "key10": "M3NQaPfzYD4ZTMYSSRYJhRq7EcT15bnvmzvnyYN3qFtwq4jwoEFrGM1tzZn4ynvx5e6z84RW9Pc4jU2wyh2kfxD",
  "key11": "5LJmpHSFe6PP9ki6GbXqapF2hQbwr7NtrUZVL6k1n6wW3w5LxEFuQ3vDFuNbhh97hLbAqv5KpmVkdaoA5BCgXbYu",
  "key12": "cUKLpyKKHge342G55QRyvpPU3Po5NUBoo7fMqS2m2WwoihDYJz5JXWNNSD11HXgCqMrV5Daz8vZi6oKLGkoUC1W",
  "key13": "2QfMTLiy27hfidAhY7aSPT2ddPBS5ec6xkpeY8LA71eQBJUtSNWkC4RYMe3ddYeJxKAATnAeVbRdfc4WMgjs8s7D",
  "key14": "5hr3hFHT8f8zVVanMhjXbPcRy4s4ySQ2agDwySm2sCPes9yWFgWjr6NRZPqwCaQiN1XsmA2C4xGjQj5nU9EoYNSx",
  "key15": "4pTHV4QSedAwRMnoggse93Vx5GBy5ekM9EbexZi4jDGwNsakEESVzu7UEtHipTGAKizvJ91w6VLDiFnzav7bzUeE",
  "key16": "4h9rDpxuVBDfcqiaBagyiAasaeUpNSuFAWGpkiKr2NFELRGhN2TjdSs3vUzisGyyZGcLnP9wYPsZnu1Cn9iS9sVu",
  "key17": "62UgpUMBndydbmLK76wC6qcssWZ6YQ4zAGW3LiAqFcJd9t19MhCBftM2zPJZzZCXYsjKoydiDkGFLHXsAbKg3AT2",
  "key18": "Y8xSfL43JGqZtsevjk1p5WrdnH34UkhZcGkVRgNp3hq2TQKwxRAnXWoqruM8g8gB5zmNts7ZRsgwerX19twZDQW",
  "key19": "2mELyo7F8TGnwsPbk5h5MyxJLCGp95Xtq4guAAi2wNB6y4GZuNK37LFwAGG5TiVAJhK21wJsVfKtjHsWyLP7s4db",
  "key20": "2VJQkYT71upqhuhQjjqfYxKEPvBrkLgzS9mGAEVRYLUocgih8AnDYWBNZFaUZPMp1HhkobpavCxzuZXmdWvh5d5F",
  "key21": "7XXn3qGTSjiPtrR2neCSBMoPb2mEHMQYVw5wRwx1MoiEeHZ6AFQcJiEBWzpaaYLFyHSETfiGMPrs6saGRzTcHar",
  "key22": "5xs9APV5WAZ4uxzVYX1r3rMfyD9T5gzzXdUK4KQTbyVkM5jRTZnjVzFkTEXq3MyZBGQPoWCbZAjrgAmCr9zgWNLu",
  "key23": "361SW7WNbYHBbX4khABBDaSCXJyjZBNtbD2Abi2RqFhEUtLoDa2YXbFHQ4P1gq9A2xWkySwRHrt1z2r96k1nPJke",
  "key24": "42zxcnUfHy11s63sTqDrQsiAeSDewddAEd5bKxnQkYTrEPkKBNh59gto6cqFSBEC1vXKHEY6mRukGvbtxRFgaLjF",
  "key25": "JWWXeqy9im4v1kfPF8b9QcocF7563xqGWJpRAA4tS1ffoE8mGnEAjFkA2FGSR9UhXsxXaLbQGMnDEsi2fFWNou2",
  "key26": "5E5aj5uwSi7j7dKGRrhtpUQpud9gDpunurBTjb8NJJiQJdGyXytDb1dRGFhX6ZSDnB9QAqsZS2XyaNM896zFJ5DH",
  "key27": "4gRoiKjK7yaDFHBGkgKY3RkcjrBbAAUCCYqYgjPZMDsTpwySZnVJGW8hhc3WbYLypUWEZCderbB9GSmTQmfZVFBc",
  "key28": "5sCVhWF48vnTQgAwCBrekvi73iAuwJFaBkujwJwUBxy7gov4aq3vR3pnAHKrZo1WKFgCkGGFj2wLnEEiTb9A4xDG",
  "key29": "5Y5FUBnc8xqbnSAjPUQXwL1AiuxrkGwM7JLRSkxuWrxn39dncsfy6neUsojoFW8oh9gYAYmqEwRErhW5EoMVpBNA",
  "key30": "4KKeHdqeuC6S2K7BwCo7vMETsX53sYe1KKNF2uJg7sQTywvphZrJwN6yeYiRWEntRDdnZZxoZBeqcuzh6yr1StnR",
  "key31": "36UnL5nww9LFtQjpiWSu4jk3D1ZwmjpLxxCpbBFEY96f5QC3ro6DJfyB1eeR8mnjqoxVsuxd9SFGcfTW7rB2p7uj",
  "key32": "4KUVPS3i849qxwduKUbqgfxQXZaV2FhXPToxoftibZQqEJk8jvB911sShWBRdUzS8W5eicXYNmdLw1TYfobWfS45",
  "key33": "pSSjpXAer9JzNoYEXpdduHBoTe1wwh2dFwh59Z8K8s8KhQKafVuKpmJkaWc94vrit5JSRiH7wtZopVyjWiRUQuD",
  "key34": "2e7A12iNrbaW3CKxA8VE6PGfpKT2pjKNoEVQCZTZW21XnARHZeNSmnLRzvbPG4tg9p2osnLvu8S7t7RMDmFdT9UT",
  "key35": "512CdVM77jPa5hX8y7ByQpXNSCpieRZsewGZVBMX2uh1Fj3f3zvyXcPbWJWZLPBFHoLUS26kT26evC87oSDnNSCn",
  "key36": "34GxEX2rAbQruaNrvi6BCsDmAEr5MfEJjmkEDRtz6cnJ4SfaoqGdT89Ukwwedgx98b6BGqx6bUa8aPnf24HdtoGF",
  "key37": "ZwS3uwvuYyKbMzRtuDwKmfariC1hs5oYSQud9CNQ6wKz611GDfmuE7FhDe6RLFifFLBHqUvriPF4NzYL25EQxSw",
  "key38": "3EJ9h3Kxr9SshrP3Wq9NkVD9LpdrXSUSmyePQQVr7AeVBkD3GxWZLVLY2ZK179qrX5FsBaNq8uaQCMpUiuZ66VAc",
  "key39": "3fJK5ZPGzECujXQBWGPg2SkBtsPz6zJ3Uq1qiwFzUX4kMQF7BBRZSopchmKHiGgXRJmCBt4PPmCaDs5jLsaEU393",
  "key40": "izPe6RmPUujS8nA3uYL52JLXvJ94dxGwMRQR8SwSfi2q8CsjSuqR122oJCbpg3sDmdq4uL4NLvSrg5wH79nNexZ",
  "key41": "bUhRGEH6tnwT8QH8FNzoqkWrq6gvoKNUJDDDVHHtxMEAmU5HgJG99ec5HAa9774eVhhTTHSDDkoBp5zq2m5gJUa",
  "key42": "WhyWPH6D6wi9MSig2rxASh2D25mYWSjLhrYPRH3eu1FnhRoNsTMedHaXDfJcVi2QHppbSJyMu5GwvL7B7WjPnSk",
  "key43": "3bCVUMevdTtjUJSopo63WsEhDbcqsRYpH18ephedU6zz9Y7dEDyoHq3bsYReR1mLKGPkhQqaiHF6DkeW7ZuD5wC7"
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
