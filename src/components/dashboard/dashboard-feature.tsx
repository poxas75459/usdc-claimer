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
    "FqTswgNoZg9obEi9iQun2YnJtk1Lia7HMDggtg1WiEgvmNaVErFgpALvwkU6xhW2kytnyDtomhdLaip47gPsUfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yj7BqLathwtnW7JzZMfD5q6oaaKMX9h51keUcdNJNSzvKd9wtYh5THABnqL37ef9YVGzSsMd1wrjNdooxFCus6S",
  "key1": "58s3G1w5DRTYc8vhHuwSNAM9E5siGnsFjdRLZHdBxLBUeC1seGdsgo9Cm2oT9ZPLva1aJFGgGXUH7c7HqJN3hKeE",
  "key2": "3LgyhwRZdiQ7KHeAUE538TezsN821K88hvTm8ZXLvaXRQxTZWC8LsY5Qd6tSMSPFEuhirz4imdo6DDqdi69kZ9BY",
  "key3": "42TYirUwA4xsC9kr5TJAHWSx3iGfaiSHqeLaSJqX34vh8KcPK7EjQZW8xCA4YhoGBFWaCB47WxmPduPUBEm1w3mX",
  "key4": "5dNVCn2wL3Tf3Y6gG98feZWDdwwnzijeCxWdkRLv9Mw4VnK5oPHCaKk7Eddn8UMweBEUsFmBfCXamjtzKQRtdYq2",
  "key5": "frHGAw5wsxW9TzvbpDDNveHe1YyuWkfVrjw9RBBeqjXVBkRJEyy7eDrj4SrGj8BHC9ctqBTkoeiysMcB8YvAnaf",
  "key6": "4CjkFJJweMkqY54fkn48sz1vSwhin2kEL5WUFSaufka9TpwxG748j99gkWLFEPt3EE9sCYN6PdfrSoNYspc6cGrM",
  "key7": "2kTWq3FbLQfoBQHVvu9uFFqyZ7ADZgDC6UuuaQynxmGnKX16jVLMfJtCRdbZCeA6kWQ6abyMDLPWL7xgU4Gup4JR",
  "key8": "THmoMdRd1cUnenY7D5Wz1ndEy4V1Jd9tVbqoG78KupNhN8y9Z3QsGSSgjVSwDSAh79QuuwX7Eu6SPthVXTC3MzT",
  "key9": "3dny3DEHLLBqND5GHPZFGTT4qeMXCn9iCSr8r7PRDk5MfTyERY6MLtjdNeUEwFUXG1VBySh7XvGAYwLSxEUb4NRZ",
  "key10": "2NxoMZ3KaR32bKyjqmSosLRLEjiGQXfofmGTBczEq5VLYVgMupmD4ZC4XsCPiYezSXcVsSVdrPrmvuyki8QWEjzv",
  "key11": "4Bf4epqfKxJDz5R3unhLuPPJctTk6nV7jkK7TfiGUvWCWSWwHiZDyoKfVvTVKZb9wXBbe8EHo1R6dCL4F31ZjWKL",
  "key12": "4AD394CZcxcM984NfKyZ5k5MAy5fBXJ174DN7TjFb93sL2xRDKTCGyaCJbTzx8uLYq18zbj3XY3yQ7gkHHbma4pu",
  "key13": "4FuuHYhjQMgptxDmm5dummrGXSmXC213o5k5z8atXFajFC1jC5uJkhwd4ZThqemfQD8FMUimTA72zP8ypQWRimLX",
  "key14": "VpPPYA7112kLHtd2bXJApQkvJ4WB4pEwAf8m1QpVznvLnLMUwjEJ2Hr3XmZ6qBR7EBNftc1UGs55WQX7Ufei1dX",
  "key15": "47PCbyrAKBvRVXhnhzXhyGAnVdN3BtcMo1tfxH7t6bcf9P1aY9KKBQ9Rb2qov3ghuiH6eKGAgdeNoC37rZBBbrsz",
  "key16": "2EFQSDnAZQptYzFB8QAb2HsARPW7JoVUahgsUxNJhH9jwwhTFWFUpst4esLNtCKBJ4sg6xjCPKsx5rbhuqiSauiP",
  "key17": "2gepmBSUcVzxjDofxnbkr68Mc6dWy9J7jn8y1LWK9hFXYigNtHpF56s9hNRgkZesMSXhTF9kvn3m2UZFnUjUpzG9",
  "key18": "yCG8sBfRALC3bVdc6WAo4akgTpLxFKsc1qU5vF5ks1gdAfDpV2YhEGfDUhrjcyWdUNC6Pcf88DnAFDQQrMy4HK6",
  "key19": "Li2HecSyLUbK6qrMKSK81x36UdMPLiMPqM5yowUUVnkQdf15rtqQfFD6MZ5RfBoFRDM1hEHoKpgQF4yy4fjmXjW",
  "key20": "5Fuo7jxqWeUGqoxiNcfxrmcbWSqyz79HQ3MwMAsJX5dgj1MhvXr1EAx6yn48fAwhcHwAuBzSnyuDsWjGxaTXStQ",
  "key21": "3A9QxTaSfraAAMX67hnyefrsPsBTfGEfgoN2jaCDtTVGAJnrRd41wms4Gp9KLNZvBckPtFQXzdApSLdxCZd5w1gM",
  "key22": "3PJqvGYHCN9mtf9GH6Foiis4YgiAcfpeHASj7J87KCmMav1Pq5dmfHHj64tRPNnB6VV27CLhmxaCCQRsQYKybq4H",
  "key23": "2FxLvARRTyUUcQeQKUXC8aZHgHHXZ9XRXTmupWedFUC6hbXePP3VVMwu7nPp31ZBtT31AvJ6oPBPgqanfXV3hFm4",
  "key24": "4ycYKJm6oA7tC8RY8fbTBpmGcuhb68kz4uaHH67bLk4ZXtnPJmruZaM5opf79XhqjFUviHE5Q2buRAaKtGzVEJ3X",
  "key25": "q69mPAzzsqPiYxFX4cGc9CFh6hpZndeb2C45rzDqqDEpQLEgg32FiLHcNBTtev4SQXRSNtwASxYrMKQ9BrJ8Mz6",
  "key26": "46cr8Z9qruKEDPfZxqwJ5cvVuqxm6Ky7dZaAb1qMtbpGGZfLHxVmFsd1sZvQCfrdPn5xatgMM4PEbE64W6yKL1vf",
  "key27": "pfSoR5GVADignHN5cEh3mfrL8c1z5hJHUzY5rxKcFTncpML27os4wviuFeSY5d33YGJrhhb2V1iDwRvUdCvxvMN",
  "key28": "6g6qXgnd4WqRxB8Hmc5rD41bV8A1FAzHxoWcqjfShhrnBjrRuCL4cQ5Z83bFvcvpsTbggzkfQ2GuBgzTXRdpbaN",
  "key29": "3fXQ9vdudfK5hTMPLihSgnLS87EVSvih6KaULYK23TswxVjYo3MZtnBjqaorJ6JJ8ZSbvmiN3kp6yZ5tbXSaT4U3",
  "key30": "36t68qzJZ8AxXMAvj3RqEXaCqhwYGi5Znvwks6QM1BSMPzucUv3dhYhdEH3eo9AU2y9ZC3Vkm6KpapBxVc5aGHS8"
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
