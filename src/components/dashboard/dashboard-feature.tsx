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
    "wjkHkN6g7komaMYMZz1cv1WQUUHnQ4h4wFg8JPqUY9ZaRrjbNBodC986bUxsKh3WZzaXS86mNuJuZBKUVV3JpJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bauF1pgZK14NZ8XxU1mMmL4BvMLvUgZ6U7R6MzRfMsZZJNnAiDm8KnGAML19hgqEjQzmyKqZqBseJeNhKqV1Fr7",
  "key1": "4Brgij1xsFKt99iwwkN6MWdwkReAtDuTgrhyqTnecWWdK3359pXxC4j3CfjsZwbeVVMMvSAU7spmCtx6TWCoBn7y",
  "key2": "4bNKVrrcoeXBdNmuFK9Q4j7AVe5xHWTQVbFUWQFoQo2jASgqnv4ho2bRCaVozQfBBuTsB2EftcUXWyk1pUnR2L6b",
  "key3": "5TXcorDxRpK4EFLqJxhV3sn7wfSa3g9zTkXQruY55CBKwcsCDaWFPfESBD8scg4per5M8m71cwhLxJk3SydmfJmU",
  "key4": "4uNwzVnCtVv3QXZhbvN488tjupmVchfnKFwvSsTkgXqGJ1vrWeCP7QxWzj9jBeUgX5qz8eTv9eEqcGSsuf5xt6dA",
  "key5": "27Lyn3vb4tWzSfjBtqN8X4JC5Ru5vdiWa2zxfdAH6sbpmTTBC3TDum1q2fHnCh4kfyUp448VvEa2i58vDXpGAhJ5",
  "key6": "2WHp4PK69Z1ogqHgjn15WL4BvvrdtDPbFtRyteEtKyKajkqRYsx6hAd2rP6kPvwiZMmwBgsZaxegkPa5peNQSb3X",
  "key7": "eY8YBq76VXwJFZ1ALbjqTE8dvYWrAxgmK4HjMuRXREFZdXoS4Xt9voRWN6yxuhcsNQVLmXtk49sUKm4VoqZUM5X",
  "key8": "2PAPoNxn7BFNeKMUsp9xJpeXanFA92BzoDmEbcXJz9uDDcNkxyuCTZXuH88JNCqov6tkuyk1paxVxJpXiunjG2GA",
  "key9": "4Yojka7TX3h8fzuU2dZV5N37Bs1uq2ytH78SNVDQqR9iC3Av6MnVVpsqa5DdJkRDchPsteZFooiD2jRcb5FoXHoi",
  "key10": "3xK1uby7j3tT61AHLe2tKKP8yxFAereo9LUrEnwqMmXD7Di74NEVpd2tnLNddVVuJAtgsrWjAAzWgREAKZmKBos7",
  "key11": "tStoNtVgsSZF61Jv5C7aWyydGEUuP41HszypNZypVjkJjW8Cpwn88Ffp44Ly2HP7TYDQfszQd3H31m7CQzr9zkx",
  "key12": "5b1MuwX7tKUUcuRXTzvFCNknZ6omty3Zf6ArTru3fknqfSdCBjc4HXa73FKcacwoZ5BqJSkXU9pE53hVQbtEFPc2",
  "key13": "4kHP3a6EwidTEqbQzhrAqW91uyuhsvZvToCVHiw69yWUqYKF6kyg1Yy1juiLaaewPA1ePrKoM7ScZF4mHw7UXW3Z",
  "key14": "58jWaGLwf7QoDwTHy1SadmDApNW47FjYBnDEjHx3uizZ5USb6PJ7zd3huTZF1sTyherpdn3DF54KA5cdjCF4NjNS",
  "key15": "gCwsr1pdJxsG6f3BaYqwwTtVs1DWhzM7jDVC99mQFaNLpP3VTDtjrc4tffuVVM93Qd5CLnNRNpArHJP1PXwmmYY",
  "key16": "3HpvKm1ovH2qzWBUfN5qncP6AFyPxVteDnDsm35yq2anHduVritxWnRcXtDor4ZwF7pC3S8ZmyHC9R6eC7UFYhi2",
  "key17": "2FPqGwj6qgai97xxN5VZVFwSSUvc4gDS7mgFCF4ZygTn8kxd6D597E1g5ASr46A7XeNRUQskqUodESFDga5ULjeB",
  "key18": "sx8HqRqBKzfFtoB41WY1WzdJw7v22VFHND7TRSMPJZAWCtRDdHezsjzsdEZH2BmU7TCdND2d1Lb41oqDjCpoxZa",
  "key19": "5TWYK4dXwgmeJNjQPNXziuUdKFVj6USQKpgy8QWra3sAkkNXqhdtEYabEjY1f35SsgfBjyPvTSGuZF6sMREHmWTV",
  "key20": "3hhtMr3RofpMGaHvtFm46ZfRt75mD3Q46Qv2FRvF8nb6dHVXuUasqjFJf4Qp9FPb1QB7k5wppYDnRcYn2xU1d5hd",
  "key21": "2Hn8qZSCeTzTYWu7YbC2Mh987wojA9GicchgSCcwFcVpQS9URqYUVrGPHQAe317sbnJi25VFGejAHaDq8KFm5ihX",
  "key22": "5N1sBT9DCDJBLZF3Dn3pjXYangQV68qsaPnwN7dAvgfFWkZgnR5m8N5ttVi2ajU5b6g3HyQSwf45sqhDbh3Uh1eE",
  "key23": "2AfMRZvEye3mc6uHEFpNKhj64Zr9RmSgYVnw4kgksk5AkgahyuJdG3oHByZDqCKDpeXkcBRievgqbCqQAbEVxkTf",
  "key24": "9wnFJ3iLJdUhB3BnEAQ33FH3osqa7TVgW8JxfdvzqjUbu8dzMwetkRJ5mAcoG7GYhvzHwqotaDwp65p18MZf9Xp",
  "key25": "3t39pnrHmX4GegRaVGDY8RCKe7AFhcgmBfxphxr8L8x9DmvmEacBVk4gr4VajmRcuejFQoELGzNt8L3D2P7WTSxa",
  "key26": "22L5GtiEiJHZXVw6b9mZPxmvBQTKCw8YeKrj97jVwRqhWpxpUJ5nrN7YGenkdZRH2Ke6m8ioKEqKcstVwx1YMLFK",
  "key27": "49fGR18w27kPazMz2JxbqhzE5hRqHAxvZDJBnkF2k5uz22GpmfS5GDhSJuTAS1CGS2KRYobVTq3Fw2hPiyXe7ogr",
  "key28": "4wbnAmweQ4BZ4GuRz3c2DmzeyWe1jzhvh2CTswv8wLZUvFQqYd69K4CKQghcQcPyFKGbX4YCi3NxHPdrWEVSU1HU",
  "key29": "3bDu6CBgBQvxUXYXGnV5CSaxMc3myGhWjn6TTj2XG7Bw8h1h9hoW8F3ThjJsRCGzNudaarQzZd8diBXtxXN25aLS",
  "key30": "2cgusVMzagk4G8pvnWD4d122V8xvALshrPxUPDjBc4xVmdah7YR7QS46hysMSJjbA9GaBrtZbmSyBQWo18CnZVhp",
  "key31": "5uenKURcLJEcdFNFhk7iwaQnDzEcfJ98cWgGjGYsu2A8uF16sW1fGBwXTLjPFPGYMdDC9ufeuSyTFPCmKVVAG6CN",
  "key32": "5j2uengLMCEfFrf95HgmXWPmsGrnanW5TUBhGwqNn9BE1PFUcJNACb2kqBQ1NeMQRpgz5HDPx74ShXj1j39fj4cc",
  "key33": "2ShQP34ZD43cvrC5KhUgq7VCPNUh7QkUZ5hAbmgXCEZ6wJ68k8ykL47Q4NkSaSJBPw6PL1DXVYM9wBirQnFGZsr4",
  "key34": "2wYzM1FuB71Bhj1NdB1LB1fKsgoiah7pvRQat7q4xb93wFME86aEokjzPAyNqQrtH1QeAV5aDgUQumgWf77wD4c6",
  "key35": "4LQdWWMgTnNsSPh2E2FbqEzQVCLsqhnkQLgxwBmmZUyJe3hoBKvzPb1ERjVG64R3VNEJbg1XuCuyox7n3EPqAc1u",
  "key36": "wN43br2Sondqu1Lt7kNxBKmcW7iffs4RKyaLcKtjCECAqwvR94icbCKSrnTymajpFhHUwURRApfxLEVFAf19uGL",
  "key37": "5V5gtghnFULEchZJAA4mKmbyM2fJkcFcHhM8HmxuqK4MvcUcoW6nseTHDTBBFN2rEZbc79RBPbssxvP6VKuH91rn",
  "key38": "3DMfGpHepwxwFPi73UfSeKskqd5eS6N4ufUxyXiWXC16amSJjShf6oDzyXaeYdwMdY6PT48jqPRDgGo3VeqXJ7XT"
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
