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
    "56r3TKRSk1F719Utme417VcwNj6riscnqonoyLy3Za5vemGVWGJx4v4SZKVu272i2TAaaUdmKA1aKx1n2CWRkCPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VTaytPj5Ca75w9YuFUTwJZLbFYpX76BEo9MK4oujfxZC45zd9EMJCwb3S5AKZrJ8DXva1isREs8iR3v21fQDv4R",
  "key1": "2F5QUHgiqqH7TUR4gYgzQYAiwFnbzRtesEQYNcNwrNdvUJJWenrUcqGMasFXhfSonyAyEPPbertGQ6DhK9uBtokY",
  "key2": "58mb87Wxoj7uxdKGPeUtCBZG6Xp5Bkr62RnsSAqjWuPHWqe1CSt5QotheQCQARQCji6jBTGegoL5ChjmCD6Ef3ic",
  "key3": "65S6QjcE1cKGMRABdQCvsbJy6GFSRZPoG9mAbktkXbk1g6zj6D9zouK6xELcto7UHLsbmVTDmSU1MghA5vgKsDUp",
  "key4": "4tsSBc9nrxd1VU15EaYhtzAfK71shTqqGwYipMmUDH3CchPG8Vty1yMMjrKkqx7GpsABVNyhDQdM7GKHUeqU9Vp7",
  "key5": "2CpY7gEUUJ4rMYFC6B8LuN9XRqGePkGjaYNADSF1o3fqYRqToqFwxf4xZXhwcesPZ6iFGqkP9zxu9faBoB2qRooo",
  "key6": "TbwexRbhdtFseuj6HqMK7TBsPizaSHKMEqKw3B3bk1mqDG4PW6AKUKNrtZqiAPhQVM1aTHWv9eoDWr6ZkWgUfyB",
  "key7": "2yHqD9d8bXvonwtdHPnCFErMgtchajE83i7GdQFnm3G1dRbEgSZa9UEE7y75aqQyNPcHqs2VBA7kc1xK6tnmAW1G",
  "key8": "3Q3hhm8RHunTsQ8BXGKgnUJc13cB6vWTRWw445VCMQ8BrmB3ySefVimHigjoypPh8c8RC2wvXtg6wZrtvnLjxYdg",
  "key9": "4F2eBvYGAMZDSYZbBFUSd6svmdxd7y9yidZF5ym8hAibpcZQ7KnWeAPCt5UqJp1QZBvMxpZREtrHvptPp1LQnRwd",
  "key10": "4SQt6QNmTUhuMZMBG3uouwcjzj5DuKicUNm7YYgvoGgX1t8SdXxRMrz8fMyUdjZwCoPous7n9G1X4C8tUoickAao",
  "key11": "4Vpg7AK95Qx7C93NVh4u8vVHSWjcytwg1D1kDs2untd7jC88SUTHwBsgtgGZHJ28kJew6EQBK2dUo7aZniWRboDD",
  "key12": "4Ysb65QKSBvJx8PL2x6YSK1B4abiXEUEN82yHNHtPCvGXxk2doZG8fSfqLXCGAhRPzyLJp92JLHrT13gBjFyVtSE",
  "key13": "FsAfBiEUNExqRHaoFKtwQJxGmtTa4GcjCirW6Jndyi1jAqQUvsr6KDbYZGboT2W7PaLyvNRisrd4NghFisFJZV9",
  "key14": "3pqsAnHwZ92mbCgJ6ahS1LXgcFEPbWAPbY65ukRT49WTxbn5FoM8CE8imNXbtDWWVaF5C6H5eadMoAJa2rmJcYss",
  "key15": "5ZQDCCKwt4Px8AtjKumx7nko6dBUtEBf5jYqiAWTHnH4aLep5cwhvCdaFz51maeCeAS7ruQnuruNgSfin3SBiudH",
  "key16": "4mShhp8Cdn8favNfFdG2nEaB76fA24gnvUv1xuZS6VomYd1VuqZjfzEq38gkmotGrHw4SY4dAuhzjxyZu4HzF7WY",
  "key17": "3ZqUmHaMzbMHc61peKKNjxUEzKKVgVxEEtfm2gSLUzqoEP7JyesV9CCsGmj79wDurh7i1DnRBuDJh51XVmsw16j6",
  "key18": "a5wvn2Nqhs62xtVyv9jVRH4ZASSE4GzVxmkVdQuWhN7n5gq89tKiEESQvyx9TrB31dRPkSP4hjkV3K78gBaXobf",
  "key19": "2T1eKkyh9nSZZZT4RtdP6upR2z4xmu9jXuPK1AMHfaxtpZCAYUrjTUkrBRqsBYRjPwRKiXjDfKGKp35FUnUw8Dck",
  "key20": "4XG99Xif8ETRxi5SFDueybL8f1Msx7khxUJkHSDPcYKXbJgctxSgP1qteQ43gRmwro1CY4UaVkNgU7uUhpJ5z3Rm",
  "key21": "4vCq9umUVgfcQps2oV7Ni5NzJaHYMnYeCSWGYfhZqCLoYY4J1xepSvt6D4rYsiTZqdo5RjYxnXJ9r87xAGGbbV4o",
  "key22": "4nTyiEaUasqgmRzFkBdZFwUVoVSp6kRVKUhy6k472GhjhqQ95wPYJJQXFD2mYBsXVnKmGxo3phjLPDs7j78rXDZJ",
  "key23": "3xZjuitfXUyJjyyyHtKhMv6ptem9Qv1cKJTb23b5HBpNzVKT5auULXdLDrbDj5zwMC8EXvSEkN5oUwHY9Xy4mfBV",
  "key24": "5KZYpPT7Jiw9mpfEqXZ5hQMSuTVPaqN5dmuPax4B76CUmP283HwPpAvhzP35oisp8fHjaRFFpRXLrBdVngD9fYQf",
  "key25": "32jJdb6KKEcQb7B7AJdrzaSDZbXPQp3H9G1W2jidxev525SSXfXVpGzjwB8duYbCDvsPia6oWjqrW3Su3hYb9aBU",
  "key26": "3hfqUrcwFY4FNXkcvauop8pYFaejyPSLoiZQ62SC7WMwNYoysFvBuCyhpcSYQ6XPgGmN57XeK3yFoedFuDXf4My5",
  "key27": "5nvXstbLQHvbHcaoA9YNkieJtShBkxUZSBQ3bbMKxS2Zm8A94JuWBNSimuxc1Mv4ELny4DP9rbZpzJhaapBypyfF",
  "key28": "587jUtW2GW2w8WmoKM9zoNLNMijAhWE3AgqraZZsDcGTPnpDaoBndZ11UWahhXRFK5KD2EnuyLw5GcdrKbQXPYfb",
  "key29": "AVexxW1Gabuqd7j19MGeXDBw6Y2TsKtFPmLmyehCBRK47nJMq7GaSR4EPhxj7Kchd2PSKfu2LU8QMD8gLRmvU3p",
  "key30": "3ftYYoWKcPZVBQhdNk5NNyaXrwWVrk2wD8xpZSNLYHvbLgKSpNPqQmm5PHcFGKecwVY5XkyH8MFNq4HdZdzQeAcs",
  "key31": "3dUyvpcqUBdDJsSeJr9eTeEC4JL1NRfAX2Ln8S67etPTXPx41fHYYfcLFdFMNacJacyDnU5QmPWECaVpGbnrM4wJ",
  "key32": "3ZFzfnyb5wTFPVF7af48SSbMf7e4U6QKefnfHjdusRfEXNiaudCNYiHS5Tbxr8pgkctruws43LUxTAQnmvTxQp9u"
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
