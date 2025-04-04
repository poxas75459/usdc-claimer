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
    "4hvKw9XDaNKBtL7G68qms2jppw9CuAFU7RRPArtxA2cihZ12g49XPTWtAvNjoUZMVnypG2ZMiGd2EY3HuSLsvion"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wAY8PZ7meXW23Pa3j5vyoK8AcWsnYYXQazKs2AaHafcVtFZ76qxetrXfH3F64s47aovsan5ghrMUKEAz9dRKiud",
  "key1": "4EZ1PMbJuqic8FHptKpPnUKFBWTnkwmNNbdMtnAuiu9mL794TCwmkXhBniskGziRfc2jfDMsZbXnTyhZVgFMt99N",
  "key2": "2vP1DkqbQYXxHsG8kjw76BHRY8LwbFvat4fiHG7KGfNhYds6juN3erWPefvDjVYHvRPo9gCgDSwrwYgMTrRhEJna",
  "key3": "3HqeiU3AWPH4apfHFQmEwxrZqm9thgaiGxPuj38ZbBPpuX76UhH2rMpgMKXwAzEyhRBBTFvxya3Bna2ohpLGiBtF",
  "key4": "4gJHSau5WSkHUNcqwEyMoUVjgWPabm3JBKW5dZCdM8om7i1FFkEXBkmZK6CN4MTDNmL96YuSKqdfykF8bDxCwAdU",
  "key5": "42mivPsVams9YwhsYdm7BQFEbssdLJZ4e6wFgyiGkxnrchaWURwN3hq3FNkGE1XaecN3RkYif1B5hMqtuz3LBwJX",
  "key6": "K9BpSn1PLLKSA2e35ZmGisvSg6XnV9Jptkgmrsoppq4QzYA1VF8e4HZhJgbzaQBqUBnFEpFd8ykZptTdakEyS4W",
  "key7": "3UUo2xWuLWr9izseKZ7xjLyMFqsdYS2hjFHPBmsAMJUo4MRSyvTmd7CwTSNzfH5Qme5uAGci81uhS4z2Y93AqJNw",
  "key8": "665ER5oj1pU1AYbfURP3F6R7MBuqek7KhR2eqygwLzuiR8m8V2a1vwXoezspbCxM2mCpyBHX6wA1H6Cq5N95XMfY",
  "key9": "2QP6oV28zsCMYNP6HNaG592doRetCQRQuWKR5EPNZGjBEES3n6pYZQ47dEX6AkVrePnYWz1bXPzYn1LMpnMNaUs",
  "key10": "LxQbJbN6meHeRNXzPJkfNshnjSvdXpgud32g2HjfNMYnZ2eHrCwNvCyERYV1K1N58Z8vbrP1qrJT1Dghkcgjkni",
  "key11": "67AbkCoCoPRxDZBjezEjr4SfBHQKYWALQxkkBRxtdTkBXVyLAF16qBjWTMUUXv5x7Z4BvJszvPv64YBwH64onpmR",
  "key12": "2MfW8GJmrVFQKq71oW95CXwqTEVE4wEud7rKkLoAA1vPzgrhkLFB3yYYZfncXbGH26uCZgy4vziLE8NFjzM6p128",
  "key13": "46KiRvWqPHUnyTy31bLK3xt1kpJ2XMZuzgVUsPjD7bgbFZxVgaeAJmZHXyeEN8Jz6Ld7DYwSzdTj77FVvMf4jcMp",
  "key14": "5LnQN6d5mEZjS2PTo4zxKSoYM5fEa8dvoUMv7KCJorgtpfQ8YigBcFufyE6QiAKJxnoSUedhkvWy7mpFeKfycrL4",
  "key15": "3roTKQmgmwboZhetjmmCxEfGcpjCZsftiJceTVFXfTJEoXWP6NXuAYk6gr82o9Vzdfz2EJBwrvKuy2HCZCHLsp2B",
  "key16": "N9mUJvxeuHi68d6fCLbEnJMef2JRqtCadtpQ3zZN13kHpbsvZDfcRkeEEoeGrjRqkz887oqu21sBhb7zihQoSTC",
  "key17": "i9ySw4VDaDxySjw1mEKbwmz8r5fSoPnHYURwwmrK2aQwBwY9t3Xd7vtcojR2aRQtyyqUXj5SqXGkBHWcNMeUenQ",
  "key18": "3SAUXWmHm168mc4YWgpu21mnVvubZJyVbAymv4XxuidPqndsLHygYvrEpSgGEUonUFL6z7aJh9kAeabvFeYwkRUp",
  "key19": "5nQqoU6SDh3ih68NVjvzPLyz4yiHv5DdoC2bbaXPQEyX5LHc6MZNNK2be3nQX3o6SM2Vpq59odVfqTdXuAnvSWKF",
  "key20": "4p6RBLpDKo6dbL9CJAoDAcq6scfD9hXtfwLaQ5qxMD9TgKbkrtWgzMG2tQKo41LeLeTXGnmDG7DRP3k7cQu1hZpR",
  "key21": "2JBMx5w5URvUQ2YPojaYik9U7swNBswYzFbXkJSaQodyWTjwhu7xWsUN38k1PNTjoDZxNmt6MtAGvUZ5SQNdBxMw",
  "key22": "ZFQdVF4ukFFF1v3gpMKr7f2ekz3TwBYGNTjLCAVE6Gt3C9t2oC3PK2tsE58Rsh9gim9C8om9uGYCAXD2aCq1n7s",
  "key23": "AARSGZuNBcoPMWMukzW9bMw3obwoef2TdSgUcAZLzbnLrv1Q4VKQiRant7jiHr5HzwvKUY7UFpSCooVmcGC5gEv",
  "key24": "3DD5RAw8utU9RWk53qQ2CqFDoEAN1UxBXpQbJcixG7KNfBLQ5ZdzcfgctKaTnZZw8tjLgt9xqvXrovk2hg652gvx",
  "key25": "cZARo3VHtxD7e3wm5LJTK2UAV3hG25KEZ2nbfxdnQArXZ2XG7aU4Lja7pbURwLNeSkmDywiDk7MCs4fURFoJDhS",
  "key26": "4o1xyGTALws3beoFCqjpjEedh33VC7CTZB9LYutPmmoNVnrmbj1NSTtSzLGyaeve1CJYmYNcfTs4LrGmz8gFrwyG",
  "key27": "oYftM3qZrdMnvUWQsALXdL1X9x4dmgCCxg7CEGgBjNvW6QHytRcAVP58kU9TVpcNuKHbTSV3Gb3gtSTqHEkyHwK",
  "key28": "epfYPgcFsCdq4JbepXQK5pRXcod6kbLGMBohmKFCzx4uez7hTLk2bMdoFqLvdhumsm9MGJMm8HG1vZbB6WsnG1c",
  "key29": "2htnye3QdcwTen19iUSJWpzmRHVGj18NChDFvWe8bC8tQs483hXrsmzBYzXnvvboPbvw8y8YAvrfjvCiNqJNNtGi",
  "key30": "4P92YQhry5h6PUELZwLFA644wsjD77CucsR6nxVUeks57gBwrchpqVdyz71QXdxb37FtTA8ExemvcnZsvgsZf226",
  "key31": "4bkQzc1drnebkxbFeUTvWGfiKW4ecGVWT2Pm7hmjtL44jmebCrHTLza5DukXYVDc2T4jGTXyNE5kFNV84Wsesuvq",
  "key32": "4cTDvj6f6EKfo8z3WWpcQWYYsGQw5kaxZjftGJXehXA4EKj3wJroHR6xZLqqtxxgMCXfs5VtRoPd8qm3ixr3sLip",
  "key33": "McJ4TXo3T3eiYiQEEP2GKZmg5ZhMXVKJYJZegv959amnzAEvCX1pJaMFfBzjuyUfWqNedkvWAaEDV2fV9Cupoav",
  "key34": "2go2QD2Hgod4sk4ZATZZ9DhieHVdvTsm943ar2GWdCj8oLk2We9iHjnfGp2qoTgjHaWDjni18LEzM7tTNdyJaGBt",
  "key35": "LqtWs339YMP45jjqc9T4kYbgyqBd1RGwb2PivMFFNxzkvjAYdg5Re7FUHJkZcRx2Ckcetd2fD7ADZP8mD26DVoR",
  "key36": "35ox2XEb2rh1aGfxSkyhxEG9dsqSTxytv5oVaoRUxnjyQg1avnoAvUPwy8pYnhUa9mdHSiRDQPpibNHSq3GD6Jxc",
  "key37": "4GwuqpfoM2dCckLTzJfcpc8SuV1uPJz5gTRa2uQg1LnZmD3xLyve8erAQTVvvGjY75rEWF82wKw4nAMLqT2TDu2q",
  "key38": "2eJ57zgppmVwwjCQp34dN4iGURNp9MGd9QatKPNFryARyu6LUZespP9qgfTFRSuK2arRiAtmyLEypoVKg7urb59m",
  "key39": "5KpRrAehfg5b9y2ZYiV3SXBTRmCaF9jwngVPTFPHxous83Z4KjQV1PHvWKiLiHZz9FqByyFs1qAvHZhqeqkW88MZ",
  "key40": "4mAiiSm3ghyVE6r3Dpo6wpQEyCnoq3DNQuuxj13JFQCaM9YehibWPf2jpzPM926Yr5mCM4h5wMRj2UPRioCvXhDW",
  "key41": "3fbYwgsQxh7zFsb1vnnLDe1WzB8hbdHwsRfcwmR58o6maAMyTZGVZmTgEPjEGRZjMJS2CE2zTXKvXe7exipqWT6F",
  "key42": "296Eip7gfk2d2siK9YnxbXreLZrrrGoueAQDWsTz7ekZ5xgNx81cpAm9swHTH2M9rV98JAHTAjMDpw3jkcWgWbje",
  "key43": "2eTYkxAm43B62jAHDAtg5eMEo3ti7ui8DK6GJFQ9BjSbf9UDBSazXxgQ3Nat9tRePr2RHMqrVgnAHRiPjvGkn6TZ",
  "key44": "2oVsqVijfZHYmiY1JTWhk27PzLPevs9BnjMwBQUZezdT2Mwa8mR7cYjB4Q7D6kgYiWmsrtPMrYxMJx32HB1bAAD5",
  "key45": "2rkk9gnGeY8F41XCo3qe8E4VSUzJqLz5E4bwUsRAzVksyHbFpVyKUXjTx1ysPoL2iaJLoKxE6PcD6gM9pCEyLFHu",
  "key46": "5AM7Rp3C99zzmARf3MBSCdX8FtTZnJfL12VBdsW2i83H3ckgMeFfPmFFd63WMPgSceFeKk64mZFEVrW1NAAX5TWX"
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
