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
    "2uXTkLMddeG1tMteEnf2zLaFP9SoXMTEdhpJYGBkboAgidawRX4WVK5edfcCoMpj9oZCaMAf9bnsLKG4te6ubX6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ow1aeoExdPhZiBcgsFkpQ4FaFkBM1gPM4MG2CLmGfoEHRFgiszSFvQ2R487yyWVtyN6ZPaYr4GyBVTqbc2nCKr",
  "key1": "65iikQF5tbuwmVVePoUVXNRAQK5okeuQWMagCssX1AWRVgF55CTJry8nRV1xmCg4Bi4bNR9EWNPVSuX7MmYCqSp8",
  "key2": "3GQgdJPm3sppVmohmfkwu7c8Ymxr5b1a73N9GsaoYpy63svUsWAasJAQ5M9sFrUTMhvcp8F5nHVsTpiwDViM9EJA",
  "key3": "4hnASUZJQnmdY7eP9PPRZj2BSDfpuSxqZ3aRSxn6VPLAe3DExxzYP8MkNuoCHyEkMotxqhu79eSPoZsFu1dA3dDG",
  "key4": "4i1WqXY2nwF3mA7jKMBUnRPRxHZv6C3g6dee12XcnMifU8Sk915AWuyAUvXoCBm7A5qAhoCTkMG8HbFDNoCGSbz4",
  "key5": "3UdBfLmDQ7m6hvBivLd3F3BFHnsxWQQUVqT2qBVHMvNGTEeU7WpZZu5GP4gN44zgEW93q2y6LskAfuR7cF9po2uK",
  "key6": "2fRFF1p7aWVWAAbjgiZBbPv6ZJFjzkU5oYB4gnZH6hz21xA2izEnjb2S5fx9xVF83aisgaQggUJqR9hg4Px2mzEk",
  "key7": "4hhDpBc2Qk75H1rCkAQYfvZfYxfEVzacZ6u4AaxQ4cDrzTMjJresKicsJQcA7PSnAFJgqd6zbWQQEMtKGbKa1MVp",
  "key8": "u2XEvATCA8bPwoeSy7zKky5SNGPomeNgPLRyL5DGAwnap948FFJMhF4Zd7Z9XHe6Jw9Z9qVUSSiG3qq55chZMja",
  "key9": "rCiTQC5rhd236hUu532kiz5LSra53NtauQPCMnXswgaLQhtJ65gb9komcvAkHfXoEqB8TcWNen4ymQs6jMigR8R",
  "key10": "P65rgv5fAtgJ3sHj4x4a5pWHVWJWz35487acY48jzx5WYBQUiTxcqd8krDYdcEYYxJkrjs9yVms7os93SqfR2oS",
  "key11": "5Nf8mRaUdiNAEvgVMeSo4mTKeuctmy8422xy2VHoK7Vous7JmRjXSeBrAtoRhdiaeyqmKA17W13xCNhh2xcrLNx4",
  "key12": "62GNTPCDZWBpz69PwYa2pBWNNwkmrZvVZXUUGBiAYtaE1uqohNU9JjcyGVaC5NVXRkQkX51ZfdkEvERtTqyaKqgJ",
  "key13": "2tW5PNHdy9UJbZn1bPkqB1oP5BtQHiKZN2o7R2ND5XysjcPE2F8iEfrWpKAz4V2sV6DHGpyeuMBxZnf9S7wBUSAX",
  "key14": "5hnYfrLaNwdRmiEFK7GDfjvHJxAHyrLqGwEWeh9WGxsLD1nq8VjYfY6BSRLuJCSjFgA7aQAZfQn2xoh7fp6xuLHj",
  "key15": "pZ7XX64gsW1Gi1wSXBkAjG8p5pf7ntzBgCaSCVBeoDDcQ5fV6ha5MpubyLQy5ZpjCaQz9Nez5bfFQ9sptZsLRuk",
  "key16": "4ZyWfdNsMwAuZ1diW5AWN6KQDHnQVUKAERURLn6c5mabw6NN9aZvJEo1W4W76Zwwo9CZch6PEA9Q2ZEHb6LMn5yg",
  "key17": "4NYYPEynTpEq4Qo5U3mi5empuC5LGTpB9ERVbLEA6hy9rLfsXXhxbve59vcLoVEfgq4nVBudYdXGmKZwikKwAGP7",
  "key18": "Gygia8fVg7fGxx5rVrgeNUuK71K7Hp7x1qzTkFMm2f3VATLW1MuJ8WhNDQCgmxoxyP7rwTfkm2dfhBeNnkgDFgs",
  "key19": "4Q9fCAzu5mbJTeNFjAuzFakAJL9GMk1ZtwS3RmLninxQ884NeGrotgHi4Daw78FiWFZrV2cAbP6QGq692fLkw41b",
  "key20": "zk6MrUWFTHdCErzzdtVMNu42PSgPTgQiui8dhikRc9wUwMnUPX4PeP95C2b8hvZpXEcGnWWa3hknFSEmBWQfnZY",
  "key21": "3mf3tmz4fXXgXn7fL1vHuJchLZrPymTCmhzGhJozHmm8E5A6uNizVjjPwBrnQywd7ei1KoAa7ujFLK1tJo7aEUva",
  "key22": "3CKt6pbW7HZYoutagVzmKxsd9vADsq5Z1grRNBTZcXbmwJDyHcJhRN8gvQrJkWo9SwB7LetuT17KjPmhUXjxh4d5",
  "key23": "56pwyRLRkMWyJLcJQjnJgyZG22U2RytBCmBT9pG55uihajg3N7EggAmMFe9MkSN56trxLcx9tcFLPa4Smnarvipx",
  "key24": "3ZAbrd1woX6gU4nSaHGNSNJPdSVgNrHHtzQnjxKUpf71KFV3HxHJjsgUKYirVNuQeMHr1P4uquseQy73dDSudSzh",
  "key25": "67cKCMq1FcyqJR8JsFXYL1RK7PgXEyE8RgJn4P2iv1zY4optPk64QWae9uwEqsyv4MhwoBHiCegRZgWRzqREf4gi",
  "key26": "62AHEC4KvGENEmP8a5XujBX3H8CXxmMpSU9skV4VK1f78WduTsTcVndZbuLGRQyP3bG6YBpy7kPKrUUpWk4JywaT",
  "key27": "3XUiSS6SGaxq5GG2GqUR9JpWsVowgmMfYZALi5DXeyc2wgwiCXNN9KZU283qhEn1ryu2Gr3R7eQEoqKXh5qm9SAH",
  "key28": "47mF7BvfciZPfsQjoyMC3VPVqeLgx5HN16WFfQaaUgBcXnPZD3X3L5swm4XJtupojCK2Emi7oqYAmSUDTjagdUuN",
  "key29": "4SmGZoUaAopfLTRvQi6rXhLfrp7WnRcGE4w89jUunxgMfgch9d7F8Rk54ZroVv52j7umpq2hE3JWemZQHz9ivX76",
  "key30": "4LhLZNeWkCdHqJgSHa2JANhNo6YtCnBhT9RoFEG6oPqpeWCNw1MnjZa3DQeKsTpX8z4HDH5stVeuT1DCf8eyMuor",
  "key31": "49GjyRiGSuVoRk7aqCGQeibBtWy5b1HDWSYy7zG2EodAML7xa6oYFNbVmRyocFA7TVBj35VL8XyNdDVBUUgNQhrk",
  "key32": "2EuKhkCSBP12QMqkBnPD4skPPgCeTzpgi7MNp7CWhaX7sztcmk9X9fmV798gETZQymPbaaRUEJDjCvMY2NPtsZU",
  "key33": "5XhGTyByMCNjpv5uZFbYc6vz5Dk9rtP4TL7NfmwvyfcFe1Qusdnm9KrGSnxoDWg8Y9Smdy3vfWK8HuH8gyXXbM8Y",
  "key34": "2RHrmGDBEbKa1tj96B8zuGoqgrXKDVWNdmieyi9tCcnDMS35HcAwxd1wLFLcaPTy1ky9MHacqsZW6BHwysrhThoF",
  "key35": "2tUBEGdk2srT2Wb9sYMZncd24sHGC4uLpCGM61WkQS6k5xPeHYU56dundX9yRUfeFYRh1e2TuupiacE4GAvh2Ne",
  "key36": "4wdKrBqt36pYhw6JLobkVkPKz7fM6emVy62Ab5enznwLv9aEyL26LY6ivVMYkJWHq4nii5koKVhBpPhjM3TTLP7R",
  "key37": "67L65Qs6KNoJCBc55yteWTNRKs1Cz6MTmZLTMW4fAuZhn1BqUUvUvjJtAH1QUapAHELuPf9o1m7NbFDxtYeY9Cp4",
  "key38": "24JUSUhZs3JiEvWx7XwaKX24mRtUyn3K5W3Xa5hRhHZoDBRCqmH6UvEpRn1gwg9eu36ZxDEDpPh2fsSeuqoh2N1X",
  "key39": "57kLfwW1JDmmTXcfQZCDm1qrbtkQLxsCc4kthEdsMMkZ2ZWnmd9rvrtUbLoV44CveoVoSxoqBNpV34C6KEWYnbKy",
  "key40": "2YU8EzDa45YR5MKx6qtBiGSNhRR6iV3dwPAKEMQ8iyCCbHCSG6BsHAk6nawvQoRZdGpH4Ccw6yAgd16X1FMwFNSJ",
  "key41": "4XubaVm7MvSZNHCTFkiekGqVEUojU9GvabvHZCHigCNnqaAkfSn5z69dvsjgHFmckNUWf2Rx9D4avy2rntUVNEmJ",
  "key42": "4fkxKdiC4qBto8psGmBwiV6n3FVtVX6WPErmgcGkSsWo8xz157e8frktbA3cPoTYkFMUBcMmERYNdEAMDYH96MZw",
  "key43": "3hKsCJbBj4rpFzMixeGaE851LT4aibnaAVZ3dDnLuudZFxiu2cyF3RSA2yu5FnPSjUzeMcHUv3gkq5AurZv62Sjp"
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
