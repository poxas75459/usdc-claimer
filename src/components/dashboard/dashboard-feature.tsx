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
    "4ZDrzzwCwEvxJHtARrp5rCYPpv4w9Cuio8MUiXW231eLoM5bHRewwUJnsUtYk2zs6bVnQNMYKpT4FrCXHr32yKeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ssjuCF2PMooUCYDZxNFe1exBNfjuJodgY2ujyg16duTuTjrMUQ8VnHr2HhZEw7ADv3tLbSYRAiMvf5A19oUAQJd",
  "key1": "64mhNLeaiGX934udhHxCefi8s3gqRokXGZSCxH4ActXNu4YMoZksuJD9GSA3xErgyEfCDHGSwJyGMeUPpNhJCQ5d",
  "key2": "4eDZKhwK3airefrqXoqjGwr3EwKPo8jtpFLQF7YRr3PZU43begxWxwFa82yXzJ8jPtJ95H62hykuD4huBWMsi3Hy",
  "key3": "2iJpRipErTjgrYnbvTSukCLATSiMVZoUBwor4HqLceryiKnNXKxda1rsoHKCpaQJH5Utj7hLJum64ghxMksK4pY5",
  "key4": "LqtZD514Q1sZW62VbepL8y7Umd6itdthFs9Ur88bUwKn6bvZmJo6xE4oiTLhL8KSwtErCvUNJTM87REfVXaJ8Wx",
  "key5": "4JKH4bNQpzhVi7UJSrfT75trPL2Biajov3AuaSJHSsMg5UKAgRCRF9XaHRGiHvx7ZDSZrHcYktSZcBpo3p8nDfbE",
  "key6": "3NjM17bogomrZ7KBQMUormx4VrJWX8kx93PTUzGUhNgYp4qR6VSnjzRxzrPXoAGhc4RCar9um2U4RYJwexLNuG2W",
  "key7": "bmS5upZGycUfC37dAn4aD5pL8CwYRyKRSQtCD47r5Js6Y9ZZtXq8P1VUMUrAs6ygiQ4BNhBavSfvAyTVLuszE9b",
  "key8": "5kV4vDVbTgTLdGZxFXwSsG2uL9NgaigTaZVgGKFiWjgSxCQy7DHsa8iCyL1Kah2jXLzFFfTqJP1NdkveEq1M7XPY",
  "key9": "4QpGXpTfc145pPz2rj4JwzWcwU4PcGKRr1jWLLPgjwF1yT58Nvk6tmntS6fHaFZ9uc7yzU7t6t8MHM7SQmw9Fr2r",
  "key10": "3NCJgJJH9wXnNVTpghegvhLqxD4uYmFghW1BxWdpwswRSA5pYgWEmy8dfRNz9jHMRaJ2BrCbB8vCaC4w9tdBHyCt",
  "key11": "3VnGwba6F39c4jZxKSsixwfRCoX71FSCzkt8WbZprAXXSyL6UCrLbRvN71nmhs1MjLWcwLsTvjmpNqHyrRwtF6Qw",
  "key12": "3MaYZfgEx6B1PiTUTHfCJrocAEBrcbpAQ7hJv85jbvGxEQM6d97avhz3XKzAUjjgGPbaLyxFdaj68kEbpqEjEFhy",
  "key13": "4QKousNMa5tVH8Fxwcxm4noYfgfuzUXgQEHQMU1s2amw2vHKDDGXykZAEAj9JkrMwr2DCC7rdsYp2MjaN2X44qkq",
  "key14": "4RdNb8DiaxGJ4FmSycXEYo9iu2UVYymBwHQ5oeELbxDcRzGxojk1879N9WMPzoB9aBGtR635qT52HoMkBQTwiLBE",
  "key15": "wiJvAmgxDRcEx5MDsoq31xHN4wZz5wqoPogEgWRw7DACzqxnsEMbuPMXLNK6EhQvE6EpsGmD1Q7jSmk9BzTWyFP",
  "key16": "55HPQB28687tScCup2bhY4nK4EeNf26Jwo2s56E5yTxB1Wr7YFX7vCjujKQqVUKJGERKeGH6i63njwpGzn3oWuaE",
  "key17": "5r5eDnRdtebnoBZUEBtbsXtJe1aWQ57SnxyTiZf7oQTmmySccWjwHoCw2K14kTUzHU72JezLpEBL52ePkTYE1WWv",
  "key18": "3VN5yA4Xv4DAf29pVekq7oVXuNtntKtjppaYHSKoLuR6nQsPTv9t9uXxyZnyr34n22jATabUgeSWtN5xchPLfSq1",
  "key19": "4C3fo1aQm32EhsGfdpPKX9NdMNfSoaXsmQ9GEvQnKvf4WUHPTssXzmEPrhaUhi1ZMQG13MQrYdm3vQ3LZYyeNuvQ",
  "key20": "53jZCE77cYarp6vy9xe5wJK5uZXLADYFXaP1RDoTZ8SSM774LpR6vcumKHBqe7zgTeWoiQyZMYHZBSbkQ6qkqe1d",
  "key21": "3RPtt2HsvZGG7iGUEfWciK5Ag6f8yEnFC91KqfLuLDnSXHuMy9Ks7RJKA7Q1pwx4691mguFQrNh5dcZ1q32trPug",
  "key22": "2QTaXhCLLcDeD332ZQhgwFZWY9a8kwcN89ZQqo3b791dUxbP8b7CCPrUbSgAwLaEGaLmc1BEvegcHcet8paY1Ep5",
  "key23": "xcbu4FwNcMhJmBedu1Vub5RZp6HK1sLvnsHso1RW7ue9PWE7PmsyXUKAY1XRFhiCzkUaRzWSPkguyY7L38Ly1hs",
  "key24": "3hnyAteVMXYvLo1RUAyhy7vy2XzbmJkTQtd69nj1g6DCPNJJhcbgUWcLba6P2Ns8XAGLWoJLDZvWSwFE9huCKMfL",
  "key25": "49FRourG63cMKQzkPSwWhGSFnPBdKVUhtEriYZYXdGvvLCCM6jPDy1WTkK4PtxU4acTEUGyS9ZQdSj5EpkVUQ4nW",
  "key26": "5i6YbqtnoZSCcWmaEyJFBYUZenTyachtt2a1Sf5Ey9DrSXYZSD49gjbsmKRZXHehM8ZPftS5GH4yM26A2PDjmHWA",
  "key27": "5XtrAHqCP7yKpYnFuWbhF8AV9Xb3jz7gPihtAciof8s9HndVYgmrYQb6ZiG1tkrU2miBBPuxnTDqiBuWRs6xMLJ4",
  "key28": "52qTUUdmECorsF19pfieKGiCGtYmEw5egoQGSHB3VMcDg1yTf9yecb5S52EjpaW8aBxrEjwT8uALaRSgivwgkfSE",
  "key29": "2uRH3hApgGMuK6p64ufkVpjNXuXrRzXkp11abKyf4p32pkqdkLCnaQp75HLhiBJyEL6pVY7xCPJ8eKpmKjsFPHmM",
  "key30": "3S7KBasGqbc28GmieZR6w1Ydjq47VTAykxi9fszHSdmKMSVDAk9hugR7rAnH4FKMcocg8kN4NGo7tmcuD1Zdkt3K",
  "key31": "2UEfLkVYtvv1nHXrXVPejv1ArtDinwJv6mwggFsDKdMiV64HLejGjXSrT6Bxhvd6wLmCnBkd4sbNaAMxbh8Wo5oQ",
  "key32": "3ohmEkXL4gbQSQFbwacTFioW8oeviAAg3R8qkLqKqK4pNp42vs6hWR2PJzDLnFm8xQjWfEXuKv2vmfvrv8TGifZ9",
  "key33": "23VAsiJp8BGPi2FCLCnNgCehAEThDUBovMrA2JU21WVCyoy5dLtXrRBU5GqZ8c8qB1nkum2DiWfrkCjZNkit2uRf",
  "key34": "5QeWkVvD6b652RnAWKsNwxgqro61Une5QCsjRn4o24ZqXc7SfCBGHHNTRUCmfUGyDt3BS2FAZbtKFkBwd2xgJN8r",
  "key35": "45ZcQNJGnDR4vE9ahmLaQMwsyHUrdTC1SFeEVWX7Gq4iyzLHv2TfwzcnHXFc9kXDwMxJuoyibZ9SLCXzDVZsc3LT",
  "key36": "24yFcxn3RUdtdsQCzntYkmvTNr4RMXnC6vjQx32E6n14qML54DVwujzVAtd2zAGoik4tpnCnDCQ3XTPhBtym2bH8",
  "key37": "65H1PkFMVzkG97zxVsNHnrcG77aq9bSdjqrgZ9JfxuUV7H6PUg5vu9rMUzS7Bx4kgpSLA9gp89zsdzdKmHn9sFYQ",
  "key38": "5KC9R3T6xA9kQU4nxowGy4UtWLc2rJbTzz4VzBvLDftbgPSo2mVqGZ8bsPorsgQfJEa2QrckaameWZvLKHmfFWNG",
  "key39": "2CoPvDfiTQ9efJHCrub9MqnPJfdK62rPmp5RekRoK3nWQGJxZPro5DMPiyrLszeaa1JudmCGqETTucscsnAoUejH",
  "key40": "3yntLK1xG6k2rMCCwuD45w18CH2PKMfetYhGr9NiZpzEHEsxxNJU1ygRLAioR348w2pZgjYLUXjcd4e76dggxTFo",
  "key41": "5XyqsZhxeJr54gsLxziUsvH74ViyvqeHkC3hXrjVGTBzbifGXSAQhdJs8L4CiEGqAFrq88hR5NC3PxhTBdsrM1zG",
  "key42": "2ZVh2zGz6KZkxQHTJCW8hsEZZuxAaUtFof83tBDE6FBTa7nq7VJ9wAXvr7YqSf4nDxsjzVjiZurkTN9NMKuPj37f",
  "key43": "4ga5nHynEuqpNG4jd1M58EtanbCBPj97znuVwNnjwmcjxwDPbWhTthMvap3pkZxPaXXNK34MUazKkPXLvt7dqpzU",
  "key44": "4g5AKj2x9BJy9MZax3JNZWwQogbkuAFr8487mM6Pizw3Lyp57aqvruE7768vtLKdpx8omwh2aE674UCtwhzS8PPq",
  "key45": "5iwtUezBj1AkH7cH1ZnurNj7Ww6gzzrNBePnsHcBpsDUA5uAeRaDMWeKN2Hir2vGHSkVrdYAdCTT6v6Lu39Lgzh2",
  "key46": "4kTWyW4SVbKvGsCYGc3Ecw6FWj1yXoyoZT5neMYNjEbjKvakTV5CwbQQFahYf9hmntHpVGrJvAcLUadX865yJCiM",
  "key47": "332kdSMBAHsdwticDDkoFf5tbK8jT7PYStB9Yk6wCXeWPCw6xNwpNsqPj9Wq1nPmdUXAg6e8MVDdxjceHC8TTg5U",
  "key48": "2FgtvRe3qAskZ5ia9za3eZe8WPXPFphTV2wNBrrUKn62NMBv4t11NbEhmG1EJAWYcaBR4nWybxtACauv6DKrmXgt",
  "key49": "2arBTJqkKpepQdn3eyLcHdR5vhMU5nUBe4M2XW5J3c7dHhobLWEDy6k3QzsxgguziXLaWeZa42VjmmKsS6SsyooH"
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
