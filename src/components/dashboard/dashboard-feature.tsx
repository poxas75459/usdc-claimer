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
    "21UibwLMytoYRE3oWhLGLceuHU3c3SCmQDwx2T3hgcV2YCaWFHvcdAAtD5cnKbD92R9r51LgDgFAGo8BcXskCLEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kKGyciLYxqntNSNREBXTsYYHy54sXquJ18NRp5E2CmqmacF5H7sQGcE1jWXpuXsR1L2yxBCiD7KT7R2aL6cPrqs",
  "key1": "FESKNAXrn2j6cNahKHMgtQJVasfegBUyPvBeCmm3VS7czFeoLxLVgyqCXJVMVChS6QUYcJkyWSnY1MSzpVxy6a7",
  "key2": "3BpskRzAe19Lv1nBANxHrAgM7T47XmZuWbrfrw4AkqMbKHAhpdZsp8XAfV7uRZYAgFj2wtkqFFLkPGZNFVvJQ6Fq",
  "key3": "4MAikNKNnEPZJFYgjnFnW9xQuKEqyXXy1MnCmksnomzK8ktTkYYmjJ1rcYhxyW3XadTdq1c61n1u36vuhWNYWu6G",
  "key4": "5YgbRfEGX98bq17gmYJRL3rd9co24UiLmuCGJU4HmL6kK3mUiDEZMF6cyqc4vm3bG6ennQvUMTQ2rxLuT8Lkv2ZA",
  "key5": "53rrxEcyeZfDq8gEvtpK9ntZ6HTWvdWKUsrpfEKRwwaSVecXyKFFWy1H9Ac5gAEx7wPXDqhHaroN5V5Fei3TcsNn",
  "key6": "21tF3iEDDYjkxe2EqP3QDzKfpzgFvzW3Fj3sgPVmW4B7wm3u3jLeuF2Sk9RJtLN1noMZHPvwonVuJS1g7Eiu1rmo",
  "key7": "297TwwuhuwK8xtgXLJUVczM6zWWtunzmnZv15imRV5itVwfYfvie654efZh75VAnpovUQedK3u2za9HUS1bLUJkH",
  "key8": "5dFLE8crByV2U1mbA2GLTXULQJLA1hsYXuAfxmYJfmEr9bAF7Dvxns5ncfpEyTjf1RubovktkbCS3unCZwNwUmTM",
  "key9": "5JGKrAJBj5r8ouA6y7DYpNZ5L4VXMjHHTbCdUo4QKwFeVMLqZbsXqQ5JgFy3FYVVNtVoALsE3PTS14MAxx5yVktx",
  "key10": "oMyjptwNF81PTDRHtshG6mph6occJK2Qac9uzzbp1MvgDQxULCEgwiSX2AeFtv8K2mi4sjYoYKiXGA852bFsBAi",
  "key11": "5jYHwkt9XYCWYu4rHWUPezbg6KEkVYvWhc5tDC9GvsgQHaeQzP889Mta6SYqsFcLg5t5Au2dkTmvpGNrq1P1Gngv",
  "key12": "5RrMmhrxFqVgrTh3sTrAdJBavKJ3aPetekcV61XG4mBxR9jXyQXC2q4WHpMTQ8JXPxfwmV8E57sq6BprxVbSTpis",
  "key13": "5XKS6ExYjTsXy8kyBZSKE3uLpqbJVipwC8ZsuiDiYrKVirhJWVDhwR8B5vWrF3PwhqURQfs87MfG4BKK45xA6HEU",
  "key14": "LdmutZrHRkuujCbo6F9qMgas9KLGQBLFa3XaoKb2uZPsGvxArrLEtH7ahpfrh2x8QuobvMFuXGKPTrXGHq9vMZL",
  "key15": "2xzD3o69NoSo7ARWpHkrkcVJdyQJo5AtvUrCmeUNVmQpub4L4i6JTM75uqKVKwhRuimbnQBA2mw2zoVcGzAcFMo2",
  "key16": "4PoEViixkKCm7ivSYzNRWFmvFzJx29fDo45SGQBQmgXzAxv2vrLBEqc5werrX1XPB9CTx8gNvqYU3jdT16FcSmtM",
  "key17": "4Wx4kNjfTK1rFStQf9xrAoYgsy5tTX79YbpWsPgynAJzHELPN4652F1wwnaxZArj3CPn66suVNaEWwxawjYM16C2",
  "key18": "5PQ7zWdbpSfacqcuuxyLNyzTBtJjTL6V2C8Rgqnf5K1SycQuN4BcETqQY5kSKpZBCEmZRoLSNqFZhdPBm61krMop",
  "key19": "5d8TPVYpoC5j8QoRLFQphGiEUaU97kfa9i71359zLf75gjXZQk5aMocvTNZYteky29uULzxWppw8v6JRPd6Khmm8",
  "key20": "55x1U1ZBvcXMoM3qbAEua7WWFJ8snHE97XujXkpc3JyDp7cGix4gjULk8QbyN5grCEfwWxT6QxuoJBEBqvMNrDDf",
  "key21": "zbnjGe2nJTBQrDNi6kF9sqsS6EzrAHoRybUs2wLXUxCFQhqHL76A46RnK4smAVHyLVBDzPoWLgs35KJEr3EJjCr",
  "key22": "2TKGEY4Pp6QPGXqAh6kxbD89Egs1dj8FpeHCXveZiAuwqUiJqXiijKz4cSjEx5gyftCt3wwWQ227BnT3shStAFUw",
  "key23": "4yt8YfQkaw7vfvF25mnGDRDSoiFxWUqStExankTYf3X2RPiEoVU2bV3nvtbhWTEaBpp2jeuCCBEptnySFg3A8x1",
  "key24": "2nCnVpoz2gxyevddSdWTTSUERSV6kKYJ9DtqQqF333HNttnSzzTi1dGes9Psxz8BwY7SqTY7cWg3G7M4sUX3A9Eb",
  "key25": "38djRafb5q2ct2CiqrJPV2DePKWZ1GZZcTzmHvWb3ezLPCJktCi68esmoctpdcYqsrk1kfTNwQy57mtqyWxsfR3Z",
  "key26": "24VrUgg7Moj8w5e6iikp2T8iWPDLLe6yEj1U61eBjfUastBvFnvBQNPkPDAtx79BqDK89JUjfMwYELUCKV1ArLCV",
  "key27": "4E5pJNWFBAzcXJbfqQRYjz71D5AuYc1i2aPrrGPUFUSsopUvNZxmppN4pdhsZQGJ2figEV36Yenha5obUQeKArR9",
  "key28": "3YnkojbUyhHe5NKrv1ogTaaFgQBuWZHi2FUDAmaw77ANLo1G3j6QnKyhaoeZoDcf2oTvAq8pAc4VV7UbEHtmupGi",
  "key29": "5JCdnswvwPLDWPNAxZWGm7CXMxNJhipKoj5G5jgiWNPqxYmhwrR3BqiysCYyxCnDrvvrLqumMeQerKKfi2mv1NYx",
  "key30": "2ec9cfpsenFqr1nHJxvHEzc3oxi87Sr17SmiaxR6WBzhBAgi3NJXEorCoWsUz84MsVWXUjqYKCoWapqSJtgaa2rA",
  "key31": "3KEuqFLW6hSWSKMRu3qR16yxtajsCyRTGHYeVFkoNqsqZktbqScvf2iJhEgeMxTWyG7V1xfGdu17YKAGhBXxqEoX",
  "key32": "m4huVjo61fxhXVeTMPnnsHRv97tGt4C824JNMdQ1v2h7xbCRhd91vyHv81nR8boW85Vo6hC5K7ymGsyh93ZEBxy",
  "key33": "5rwyyGh3bBdGHW1xYFE9MucNzcUJvoAWdxf4iR1gTmdfuuzPG2LuaS4BFHMfgD7RErjPjP3NH9Jghr2DzdZ6kgts",
  "key34": "v1LLhWb4gM5VTCRbetMJYofkb6VdaXm5xXKachFas6tV85bR7spBZ8tpeN7dkpSEFkV2Mjj8ebPy6moCRS9rXmw",
  "key35": "osBKDiPzJW46g6nQqTuJEZQtxcWaMTGeBRg5rP7jy87ZKhTPVa2aZ9uYpGdqKHgFwtk5VLzVrduJ1hCs9aj4Cp4",
  "key36": "2kLySs5Ej3tkxRgft9hhNoyPubt5XFBQUpip1Dk7eEEjTQmyyjALP6XVWM1jRNKdPp5ncYqPwU9dAFoWXRT5LSMJ",
  "key37": "25SxUXPQL1EAizE6vDVXLudPkPoskn22anabGxJS6WUfXWRYnhHoVrrXF3rhMEFsuF9VYfZ7ohXhHpNT4wNjYCKG",
  "key38": "WmbQLyivDUB8bFN6n5umot3GkLtapvhcVV5dWSCf4UicUozCBtD83RLwKYRahrQmUoyJDBGufd9rs7gp28WHFZ3",
  "key39": "5xZqgAvgD4rGXp9BNBrP4KDPQhw2cczmsapDu3vzUpA8m5gkjgkmL1MggUE9bTo8F3etshdwb96a34Zb6cLs4xen",
  "key40": "5PoB5K4jGStAWZbDF4B7gABSis3gn7vLBmp3U3f8U5FvDKdws7KX4m9UD7YPS9j5eXS4PeaZyDMXTb2d4RaXdTtB"
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
