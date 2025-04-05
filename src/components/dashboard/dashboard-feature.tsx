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
    "4g75whSwrmMPUWMJPZVUjTULsVQTnh1caPRL1gprLLphZ64RutU1g9FqVAh4vtqLNFWnHy8ioZF644uvYgC1xgf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DFs73EHXQXkDaFVR8Xco8xfkiTTFcweNArgUwYWekEgUUwRP9RHDKhbj8yXTxJnuGmmCmJPV5BgpnhBMiJdosXa",
  "key1": "d2GiubEGiqZFNmdBea1EpECHEJQA3nbWUfSnNS1F7LR5o67VzbPPV99UevuZRAN6xPLoSKTbaWtWZe6DEBNBGxt",
  "key2": "66Eb3XkMVSToLuYDCFtSe4TouP8nvEcXaWsmBtKSG22BqRkbYKh8ccD5h2ZnYXcBsoBMYjQURgzsVVM13MjiWeku",
  "key3": "B4uMCiT9Fev2e652Quvrypm7hBUEFYmnHkzvm4kD6fxWuF1eJ6NisdecS5oU3D6SMQQwbU888bHAr18Wz9LoLtA",
  "key4": "5ERN57k4uv6Q1xH1mZ9r7afRdNRUmPQBcBBaHjvckbCBiLXCpp7w1anjiJrqcrV3p1cavDzU14SyKfaLNRDQrhjf",
  "key5": "KbvJGRU5iGzoxQB5thxnNpQ7xAwiZGtUqyTaPvxRSZ6Gify3VWi2TBrpUUFjdCEQG7t7tH2bRBZCY7QSnAC5Qcz",
  "key6": "4PQYmV8ZqNnzkuecGnjqNo3Vt1gVtmdmbL8eg5VZVMZhpDhFUiA31SNbCqA7zUQGrzKs9GZjdhad5GwJonRimwtU",
  "key7": "4PyqNjogLGyAMmBCZrgP9RW2ri9zpVfNngAyuvgp9dRYAx5zWVMQVQHgNK5xbnBYsTQij7cCHCyjkNvhwewL7mVX",
  "key8": "5wcgQAwFicLwVfXx7DatE5hQJTHRh7P1j38p8p4QfxNTmVhk4SERmP17Z5L5J9UM9ekKvy8hBK78gux9Def8KxAc",
  "key9": "2o72DKPNvjrfraAQGuh8FYAskstmc4csowofYQBE692r9AuxPkHxWbsv5qL2UaLhj9jJ8hbRsJgNnLyjwMV4i7LZ",
  "key10": "43ZKHjuNAyHKRzzWzJ8Vkpd3yd2kDfvM5bTpdQ69k4pSbdtS5LsuAYmQx4ASBRGyH9BfV94LGkVZraxdtzMxAoyN",
  "key11": "2r5XhorDqddqKaVpiyMjD97cW9744FJJNkvQMHhJNvnqXt2zJN57iRNMTYx5HjiomVsnCXxdZL7xdmrfwde6ZPyC",
  "key12": "2p5pzEa9VvCqivGTwnCPynrvtyShCAVoNaqm8omMh92WjRCEgU6T18ixW5R5MVqTjU347w6yxkJAYgbpbadokiVC",
  "key13": "126kJrAzwqL5FTjeLrWanpCdGZyiHEK1pHC4AqV13cUKReWtsk3J2Ah4BEmiTx2Uhw1Qxxt433pwgASGLsYYph25",
  "key14": "3XoRdyfohun9hgDVBzqoHAxVVECs3jQczJCc6PVEGvuetyfrz3VLZBnu565ncerVa2QpRvMYZ8CFL4AiSuhVc6vM",
  "key15": "3MEn6s4AwGa7R3pkaqWjAdFpbQhNA8vnC15TwmvxroNdDZucVmdJm6R8PX6aW8pRLdqHxqivfBQNQbvjGaWS8pcC",
  "key16": "5GK5xSx1Dv48VAMNMrTYwrfrZUjHZ5Mb2AfuvT7MpY8Rc24jguX1mLgbw7MR2y5fHkqezPtx78tbUMy6nmvwR3pc",
  "key17": "2UEjhHEQgceGj3RPMybCbJS6YLPwxRkDc7Q8hE2ctWb65d1rRLx14AwkyZeqKmLLqMhSpU8ziE3asq5kfc18nd2w",
  "key18": "5avr8Qr3YaZRD8fMV1ppuEgdpCKzXyRxhY9nuQxenYPJYYR7kiLjUiVY6RRM1hntVpAzaUM9dMhTFhfHgKmd6zMy",
  "key19": "65babfjrRi9V4t1gUFp5uKAMkmMYz4eyFYor99r7LJ24PEUcKLS9i4R4eNeHDn5wpGoMGBKxRd58wVK9WWMyEgBx",
  "key20": "4aCyTFpn7hxfDnMP2p92NTzpFSUPVe6QxXKT2xgBBtd4RvAD25xHhm64jhLkbrakE4N7aBTr9fmsB5sxnuhrUmFB",
  "key21": "4vAceXsGajMD4KxQik734ocpDJMD8kyHNdhByApPYZWNZYk1cTRPJWSN1Ky7u6KLpQRnS7uHLEDDeQJqAEjCcAYE",
  "key22": "22KRLia2oQUjwiTbdXxR78rjSrEAJUuct3tNiCcLRoQxRBdAV7vH3HsQQHjk8AVENhDvkbMUkWmyhsqWMctxHCBL",
  "key23": "4AkVRQ7ZdwWVa7riuFwZdDwm9WpgaW2hmYgEkyZ5Z5k6w3DqPcoUMZGf8bPgzfLb2kDyHnN5gKp8pH2UURDUWjSb",
  "key24": "27Nmkmz5SrGPWWahjauurqeNKkumKGyJGG18LWDJsPvt6xAMdaZv7DksLHHVa1RyAvQP65qtuuenrs2yqerWU5BZ",
  "key25": "53J9mWa5FHV1x7kx7zzko1VsE36ENeEH66NiQNyyByVMEJHi3ZTSnvfejf85kvFtoHQUKMNCrChv2iXrsmggqW9W",
  "key26": "4UUJUWtRQxz6uLmoQ9QPndoav8nS9WQ4P5xHQzNymqdWDAJ6ZseamRs38dGKRZHJr4KNF6nNwgkivT1enmjKhBEx",
  "key27": "2eCp6FCaoLodtxasp4RvPYSVQ9EJ1xhiCWg4mvpw8mZur8NErfSDNLk58hCFhCwyXhJeCFcu8ieHaRcecucRDcws",
  "key28": "3H7MNjJbbp6fELZ1WtPe8CbA1JMXLHc4oxwEPV5Le2fNGzHYyQbBeb4BVHQKtiahdUTrtkWQ3brY8EKLLTsnMQmT",
  "key29": "5g7CaV8rrk8YWfxLiTsXEvweyprxL4oRpKCJKzUrbpPHVAUY2kPMPz98sP8ZYEwMrsQ4z2WoxZzVMindJnqB71FG",
  "key30": "4VMzuoEWyv8U8xbCmvrdpTdU5FMeifhSWK1sv9BJnWv3JZnmgPUdANAdt3mFfpz6VN9hjozA6oTVUHcBWmJ2JhR7",
  "key31": "5pXj66mejLCixzFs4vGv54HHXRfsQypc2j4f1c5H1EsLstZDkztQZzRsynTybpEHGnkNt7TPuYGe75u3J3hy1eqQ",
  "key32": "3oWNmYoix8JVfFawd2bmsKEMdz2u82NiBq7U9b1gcBD7Ghix2HrbCFUuAcggvNsop3hjK6S8UKEEg5ZmMDqGUDEk",
  "key33": "25cJRfSwpMnteGm4D3QQHMX5C839J4au9UGVD2Nda4JubSypLzjWKL8TxhDnF9qnJirNdu9ud7vXYow28o18JMFd",
  "key34": "5k2C75QDE6HyNBpvf5Uh64AU2D266RSjAp1jXXZQYyhm2S7zV4uQdcXEJNWhyQqjnwSprZcwH3STi3qzjfEGBEhS",
  "key35": "5MJF9BnJbBaGVbYVhUozXwrLLyJha1tk9qfaYvT4b15mqgFj7nR39hjdEjWWadUJCWP2zNU5AU4uVpuYNrH3Ftu9",
  "key36": "oSWuooxfqEqgukYPishkVTRdfUS8tSYSgchfJHeBrRRcn34BhQP5p7358amJYM3NtAmDu7ib3MMCSoYyBgU5yQN",
  "key37": "5jp88VA4LpAFMxB3smE1KaRNHDPqanbz6VCBHDF9YdJs2RJDm6HMkTh48G39271t7E8WUNfA2LmuyhwEVSxuNHvT",
  "key38": "2aCpCfKDd7bVnmhsPuam6hkfG8uFjJsr2iGG198MLzGhPYqZvWm5SgCFv4kZ87tLstNMyH7dWCBzKd68TbPuCa4g",
  "key39": "3AJeWFtFfTA4ey71v5MQEqefaPcpqZQceZ7pVZfTvou5amwQyqMfChx11yn6osTiohVovkzoKvbgipBFj8zY2aGh",
  "key40": "22a7yEuNWg2ogCC9haSWPNwD6Nc4Uf51tYVjYd3N2CsBXaTji7bkfsvTPTd7JdHU4EZVVdakSFXqWsSdEUDhXrvM",
  "key41": "iMc372RyK8fUnVzgqYBuzQxbGartjkWPANxjQeQz5fdMmokMjF77F8aSHhotFpTpvwXZ8zJqdpnnUTKYUv4M5f3",
  "key42": "4rQtzUfV88tCuRAyeJ21p4aZBSqK1cmpxSLN4aCDwWHhxUB4GML7i1GFsRTpHjWwVhZgMwSuonjogCy2JPAJTPe6",
  "key43": "Ud9wTky6vfx4yzvSQsUokc9ZqMtYesbbaKZ3GLhtJUtr3ToczkLxhPrJdQFRKCADnXcT3hGV2p5v9aLWJjoyCcX",
  "key44": "3Ax4zVFNmQWRRxkJtbmfmFgaj1FG1xMmVXuS1Bh7N3VQGpCiTvdgbVs47bXh9fFcL2Z1NMUh5DuDSGEHCyT978vF"
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
