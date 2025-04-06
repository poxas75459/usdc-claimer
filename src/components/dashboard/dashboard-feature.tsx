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
    "UMd7K3vrwzZTk9PX7xXuagUu1dmW2RhvBown1DAEtCqUBj1VX8WP1Fi2exUnEg7utoYJ5SCK9zVciWq36dcc8qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dFpusNcaCNHr83e7W9XWah6BobNBe8NRYzzZfbVGKmsebrAFe5EELuXBUz2miM6B8h9DuyyWvsEbMNYD92mwhQk",
  "key1": "51aMWV9haTJoJ57MAUJRuFfz9isuE1E7q6zeCpbWXXA7qn6tjfj4jN8GYvgsjq6Zc9xEZvquNTLR5Unm8g1MimZS",
  "key2": "J1jLKzQtzPkD2Xu1cvUyZ59hseofPWM2CexuygdgpYqsC8ahUTPTYSUFNTrNCL3n2ESeLuZDtWpQ6EXXPLjGzzu",
  "key3": "4R4h7H52sG9XydnYFKkeygXkoqeLDGYQEXwjCqPiDJoNZma2thvBpCnkbz88xrZVtSwwXdSwrei3GnqbhmSAjHyp",
  "key4": "2BmNB3WvxLQypDfPst5snmyDZHSSPUjbzzHM4YJ3wv7AeGi4vxrBoqi6LAA4gxpDKXUhm8BCnTEmNMyKPHA6d1sq",
  "key5": "wishwevWFS5qBt4qg4prUij7UMoRS18xav2TRG6g2oL9mBCM9DcjWZYwtKeCVQF8943AiAr6dNA3GygndxKrexz",
  "key6": "2DaMUfKsvBJjBuZd8Q5F34NVURSafQnE9rWE6x1sVNcD5i7opG4bBBGaKay3BTHE1SPnHxhB3tPPx3a3n8UsSqS8",
  "key7": "5n9wLjsdLF7hcbK1TzPva4zCnaHyVyTDwvJmkDfyf5FfqeQvUnpZVcrAqxMYVMoxe6LS4JB64kqMCFYST4ayHczo",
  "key8": "2Cj4gffK85o5aKJMUUZmWUN8F88ZPdoVqe2QgxUi3v7WiC3KuRhmKmzKXLjAHhLegxwCvPkssCj67628U3UvWUVN",
  "key9": "4et1zdqsPyTozShQNeDKqkGJqnrCWpmBiLorzn48AFMMvcDd8vk9FipPk4XpfZNHdefM8L4LvMjHVwyxLTeuTsKN",
  "key10": "4RUYtK8eb37nCc899iqHzpJbfydqv9uYfv8FsKhuPWZqyjg6nWvz9Xt4aZWrv18d1FBvXZcyog1989qJT9DQTJVR",
  "key11": "4J7Jkf3kKLRLUE4cMensh6YaaR3XP8jRfr4UX6aK9ton9snkGaCQhqNgZEUKoRQBaKurr96AevWHq4fZKFoHPYrN",
  "key12": "2tv4EUzFZiodTGYQMSujb4wJjvxPuCS8xSsbT2R3xZgWBaVHYjFxmd9GqWMrwnfFpzntaNUok3NARiswSzHqJXNA",
  "key13": "2XELjh8UALof8kD4pJEQn8vkDfdFcAnsSTwtihgq6YDx9aEWjGpzv67UY1LVuz62eVFXnRchhfE5P4uXmjpUonK6",
  "key14": "2AEA7vXY6GvKkkot6EW8cm7YGuZwv6N9LSZJbME92Lz8mtKBkqu5dXgt1ryGk9Lr7evpnVGZYjdxfq6R4XoKXBmn",
  "key15": "5BLjSk1chs5KuvyqTAfsndXKhFTYzQmK2iXHbWJJvhAkg3koBr2axKRoJGma7n7dj8w1b9phJTo6pSz9xLWR7oQx",
  "key16": "2i1iJrFYFaTa8MobXkmoxQqY2iB32onBQ36nqoM3r3sgQNKhJkk52UXfanREbLFTpHJzh7YWMPA7rHNwJNGtKTF4",
  "key17": "3EMjdYniNo4P1zi2siY7nsXTF1Z71ug1RSip2hrzKLdwhvYEYp6kN54dKipxyrTKtCaimAvoqrmRKm8iys8bPvEr",
  "key18": "2raAf5xd8xeq5JaCDyZgfKXEY3ZqP8WnBAjQTGJAvhMEYyCda9vXVdVUXudX9XgGbvMH5hq7Ki28PiJyEPpiGh3h",
  "key19": "31r9gwkpg8qAg7DWjoRnEJNSoCQJdxzheuj7tvE2TbvuiPVmgeKTFWfKnsbWuwLwkoYSGsSt8NfBmn7YLfbjK6pi",
  "key20": "1vq3QfpvyLKcewxJbqis7p33GXXiEK2TJyxsbMmVrtnivRubp8arEXAbDZFNwnVhCXCdz7Tv3Ffh9eyURTRQtn7",
  "key21": "2NkUUHPVkfeErvSGipEePkXZBhcxzqfTsG9HymgXAVyTiKVAnFT2La2CjcL3SD5nkeXRh5yCySpQLLePLcjwYg85",
  "key22": "54zBHnbuZNhtgAwMunkbcxAgctSJ9iY9QVacsLwRaz6fXBNw9a6H3r4F59sCbKqudFryad1utVXQvJZ2z2kgSwzw",
  "key23": "4gncRgbp8PP5TDuzYUzdJSu1eqStn5gh5GWZFybo9p3YxZmsC5gZyDdMtiZ2WX9XfoMFLCDw6Y5FbHAEVqGopMoX",
  "key24": "45Sy93MEZZHhgfD3KayXHZusZWUiL2dYFcQtSphEbpZ4fYjZmcmZLB3yLvfQrXXEgccPMCiaRfaoJmMvD58tScso",
  "key25": "7oksbGRA13kp7YXhstjtGsWBCSpVqVuwJ56ZbpVpCTCMZuVnfAJBQX8nYfUo9skHKNY6zrH8re6Nd3qR8qCVsFu",
  "key26": "2XzKVvhhy4AKvkkJaZ2GAFJuUZbwETvSTA3uKZS3mRs3QQuPYiCa5L3JubiwzFavbbbTet1RWhDKLjtwEXZyfvjm",
  "key27": "3txPXx2bUVRYiBDFyEZJTawxb12NRc5tRAcuH8f96fR3T4CYiZm5fymZJaYSRDZ1qUYRXJ33xRL3qHSVFczyWvzE",
  "key28": "HB836G4Ly4RpGGGuZLBDdqaVbYLfPwPDyHG6vH8yM5UptSB2LDGC9ojwH7Jk4fC9e4XboCfwnu3MN3DBDUx5vCE",
  "key29": "PFTmfJurbztAi5Nog53EF6jVoVtTiVxpccY7eCWUPyxXzG8jbAcGN926Ppr2NZWwHSiEHebRE6zDFgDN7ABdjvW",
  "key30": "2EzE98tGrJG9ADzjHEtYrv3AWkGWnMSYW7kAA2LMb4W5wPUYvKghB2upNgF3FsJxXQWbQ5Lsz1K5frguMT29jgqG",
  "key31": "2Wt4LBLvvuP6w1STCcFUTjU94hhXmP3DEn56XRz2b6tY5mUgVMFMWznwcpe7hm9cz3DguYQ8z4wUi7m7iBRUih4k",
  "key32": "51ZhPPf6aQ1o28xuR8u1TzRjYBbmYvb65qVP7YULZov2Cocq2cx3BRLpQti5gBy8oxu6oqTWWxgNTsc7ASZ6tPMQ",
  "key33": "GmyjFekJ44YpQwEQZWQ6hi59sTLGzGGxEn5HqdEmQnhCe2V519edkVuMu8h3rhQsaqnJS9syEEYmabcGmKGQ2q8",
  "key34": "TaTJntSnof3NM7hxnSJA5XoQoc2RbL9yKdSLxUDpHeKQBf3KtyxsAuvXUnJnMZkCMByGoKYG8vgfLp3hw1ctY1E",
  "key35": "44P1Y4VZvotnn9ohNBcF5pWqZXqhr6r8H5qaNZ4FJS6iHYsAYQpWJ5hUsN5aeeBxFamxnot3unezKxhaJtnRdbzp",
  "key36": "4m934D2UjMi7MEPgAbdKcXpatTEkb6e25K6e8MKRBJhaCFTSb46JLMp3HKToUmuHSwD8PLzmwZd5SHHZi6thUFFn",
  "key37": "3gnPJVH5zBpX7epVkYBNq8en2zb656XrSxQ321P6PaUuQAyKdjhdGrAQW9uvtxQuugGaHTVt8oPCfvKiaUCiSicC",
  "key38": "2MtqL6L94MAGfwdRe1Kwwv5RuFu5hEJMP28F7dkzsdZHPnpLmEPN4CbPvr55R8kFkX3vDx362p28a3P9dWDqqjbK",
  "key39": "5Ug4r7TkHPehoXqufpmwc8kA5XMod5gLbidoS6hkB9pPkwXquAicqFPv66i478Z3KNmUznJpQo8dXvPgsezh4G6E",
  "key40": "UgEALvdk4oA5thx3X54D4vNQ8PMzrezy96pDujccmcoKox98fkfJ2mG92TcQhBVHBmTsRbEuD3N8RbGZCVaVH1G",
  "key41": "5G6SFitEUDS8c4hsSeaA7DxyDYe1QDLY9jzfeaab12Vk4KchFt3ozCtU884WYEdSVgwqFF2r4x3j47Ryaq6xmnYA",
  "key42": "4fvd7dgzf8gYmj8GiPHMRFCKuTNw6ZjzfBBAFRzoRrd353XRa9aTDA8hck3S7NuJFSUtw1nv8UL9HR9rtJxcowyS"
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
