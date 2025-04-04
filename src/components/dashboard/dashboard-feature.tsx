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
    "5G8SsFmdCCdUWnHyYKnMYexbM2nZEvJCQEW81vfwfuZmLvquC8dZ38ppLHwjVJYyWcs71RPghHH5VtcDc8vFDdRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62TUCqkAoyCyepAFsjLZRM59ii4885iLLkVFPyvVMGAz6VxSWQJEj7jSgKAATCtsfdck8AhWvdw5Ec6tRkovktAh",
  "key1": "3rXd32k4HpFKmX89KmfiuCrM9R544EyACuoKbt2u2e7n2U45rBKgcoj3uCdUArN2dyybaXtx1CCNv4zGBSFsJepa",
  "key2": "2n8MSxsZyfGzPhkv6KpFm3NfhBkQ4XXagY6eUtS2Lg4GkzmMCHTHHqRwE5uKZcLMUhXLtwFP1yzFuur359AJF2qF",
  "key3": "3aYQZoiHLX8GPaALUQP3PzFegSGqE6feXdY2n3RwZGyyZ51ejbaN55ECsS8cTgep4pnJYMyrojWjbAYkmexfaT7o",
  "key4": "4mVV6unQUMFCE13Tbf8z7LT9hTf1T7JyQXJBQpbjHNDbAxZ98AMYDBfDhwoyQaimYiMkD7tqPEYRQhpGz3a86Aff",
  "key5": "3BtL8CTxuJ6z3kAfUABEZBuk2T4X5wwDt2f2HZtaoUPoZYwPWsfxGfo4ruu6KapQ1DRPFEKbaJnzDfCbeeuyEQ1o",
  "key6": "5TFoad6aACTPydQaDr8LK1WmaV8uFpB9NPBeFdbYnabZPmjygVt2c71eNmR3ewyP1L1pL6RnzPG5ftGzTq4EtFSF",
  "key7": "5NEfLY3zuSP3k1s1Ks5XfUbSLAwHF5B8bCjVo5H5nwCmKne9157BwfQZapRr6D9b9pHQBZjVDhUmVqmpDR5PoUwa",
  "key8": "gz4dFFLfck3CL7wqbzS3me8o2p1vpobm5oe8QxpEXFYPPEnT88j6vhPneNgfjs6XfE9F6tQ4WbUFEMkw9Ui3VAY",
  "key9": "4FMG8suk41piDwSZKSNFJ6ntm55jKkYnJNziHvPTdaBd67KfPrmeSxdFrAXtVPbrubYz8B4eEhgSb3Vuz2AF6KHu",
  "key10": "5eB5vMH5GfMVnsTXM9wzYT7nnLS6hE8ERer4Z13MmNCcGDQovxKVU3t29urED6JzRcsRiXYMLZW369ZpVLaHpTD5",
  "key11": "3EgZdeKTV8tfpQRCwfefV39TF6qz1CsGAZXShZYK3qWb7edGgCLyVatZN4DfEe2k2eCTuQvhyEhiqPgDQFJZidq1",
  "key12": "D6SvRkebr2Qh1sk47AbTRT4mwVsZdhM5rWLJiQ5QtRYJoNwKt8cSWvCMYoXhL1kmjfjJaZC1ayqaU5HEnY7SWip",
  "key13": "2YSsLwLyBrRBMMUJwFXWPXwgYY6JSjYVmTDXZxnJu1mmgNabXKqgsuQzDAWGAJV59bvPhawsdZ8HVerVv5BTonco",
  "key14": "3aQFXaFE1J2yJP7G243PxNLJZvq7XcTd8vNeh5gnvMUJZz2cXJp3o7e7FmRzuyarotVg4uAA9DMwfgXvbmu7NLzo",
  "key15": "3p7mNQy6xtf5xVxfezHcDAyXtp6MAJgi6SQ4SYctV8nQr7GKnsecKmam7KVue1znAF8ZKvxpe3VuPLXdvYno8SYE",
  "key16": "5mUYGqW68ddthQ4ppX6bJMMyYS7hpRhJ3sg8zvUyGmPTBMsJkKAM8DTL8kFQhbm3kcRRZEwAANb5pSiF8hXmDZx8",
  "key17": "61o1hWCsndDkqcgDoGArhcuiox6TBfCXGUkMz7rFPP6gCazoWnJyPihvuDgyVKLtHBtNGfKKbrEQTGRpfPiVax9B",
  "key18": "5KJM8v9xFVMwznhycbPMNkxagwJRBBF1cjxTUmMPHUbnSbNVpX9Yvwr8ginP6TUmWRfHKtmUGjcT8X2FBLPEET5F",
  "key19": "2bVhvjGLjwqfUJgNDxzHqRJecGS7KbFkdRkN91qn2E9jjRnYMCr7zWU8YReqM8X81Y4P8gVhQ6EHMdS4rtdex3Pz",
  "key20": "5wfymVdSfTDVoZp5EoU3HJRvxKCVNhmsaZeuAYAf4mVuUKChmR6r4nKJ1TkEvDcuMnkkt4ejBodPrWGvYfRb4ob3",
  "key21": "23u7RAm6TuD5PH3Dftf6k4APGeh5Hoz66vLEGbCo4uW4ZG6sm31wGwEkGvPAc8gwumEXMhxf2s1sJhFH9HNr5DSV",
  "key22": "2uALWXVXERtHHyD4Uhjcw4ARpdNrybsmYCuQuBbyGigV6ssVLAfbccdAHagQgZKABHHxH4vYtkWMx8jLhacCo9AH",
  "key23": "62aWhv1i1mSmtwyhrDg2zBUmekXwXQmfREcr2oMuX7XQGUM9XQzfzHRqWkuunUyj648YBrGR9WX8UJsm11wER2qx",
  "key24": "5tp2rwk2rGJCbPGCxFoZZKk5W7wN99uUSbuGtvAhgFX7emESVnx7z2rShmM5SGdfmpphxFeLFQPcsxEKZicfeLAC",
  "key25": "36s96mdCc4NvBez8TQAQpV2TotPPichnMQf8LP2SvFtu4sLN1URS82TdMGcdaUJscUzcH1YHwdPWY9VCVmWRudMb",
  "key26": "5gHvNKbRdhuWFEVUHEhmw2HXh9AaRkwXEta7miyTwzEfr5TGUKnm9DHgotKRWPMNjNho2mcR7GUGQHww98iPFAkp",
  "key27": "4W1L7ydnKtU7VWcE8Ct6uZmZTBLq26Xkebp4GDsZZppRQduVHAFjLtupNTDS2d5TEwG2Ak2zjzHe2AUXsMbah1Si",
  "key28": "3QZvZr16Vn94AvEy317F6s6zuaQ7A84AGFrtBwrhfXTRbpGFXU2W7qFoYFHm9sHEFLxn1cvpFLtPicxUQTr2DPuF",
  "key29": "2FvNsVZ5f25WbARQaReqKDSWrnEGSgpytgK2Y4KaKHDcL979V52n7cNBkh6yGrTQmTJDAS72Bf8x4W3DzS1mcgdG",
  "key30": "4ZfSHyv9Lxw4tj7Fuidud2MiHyvMN9GBsEoNhyiYdR3FV3YksEzUcU72iFFFF19uR9G2ArcyUMb9rB45nRC4bvfo",
  "key31": "42Pgk2cMNKRVi3js94fR7aaTsj95BVtXetEWLpxJJTd45P6FxhYhQjtUTJN8AeK9sUsvoeFSngMuE1sxEzjeubdk",
  "key32": "5SoPw94D4A3k76njQeaFXi63fbgg4LD9hCg2KsfUJCH8zgFrygdimUkriHYy94FqiaUbd8YchUERAaC5GgyQWsFD",
  "key33": "HaPgS2d7NxUQymxzmN2mpBCaEbCQcPpEkZR3V9BRvtzF4iFhrkzhfcrjSiQBGmqDsSCYiYSxzba6Buc95LgJ7Su",
  "key34": "3GPxi6cjJPak98f7HMSTeDsre4JUpqWqFkcfmgCBj5vjc4E1uVkwYeHT2aw2q3S62wC5K8UvoBvxajmCBhXZuFsc",
  "key35": "5NhCtUCbsv7YJx3TX1mg2Fdj8qCnBLXuc5mHSgK6PZy9Wq7dZS3tUZCaXN2jVSStPhv5GKCY7f8Sx19tTLZEiW7p",
  "key36": "2tv5oX9e7SBf9DhuZzG6coafYyQaS5SWfAb1ej5XCQSPQBNPGWnsMzzsYJHMUWweKbCvMF6LYPNh4rsNTrKBXQTa"
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
