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
    "3YD2axK4EHZF1ekM3E7rcfYCZ4aCSN21cnuGwKcbjGWfXDwAzodttktaVyKvk7XkR2E3TB9gYcVH5VpULHziniar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32zUSHM94yLKx8pAbYYkmpyVNtYZjy2Jb469RhDmq3E5HGL5ePASqMkRaA6R8Yh2vP2Luro2cNDw45tL5Kdq49Fs",
  "key1": "jWk7zEkQxFLtMBWFPeSi1YrdjjJ7YFap4Zmnm6KpRE2P5srjwQEnFXLf3dma4eo6LAPKmtq6FLyzbaxQcuUcsAd",
  "key2": "5p4Y77M6J8FVV6icSgZxBn46VUGxZW8JK7kWF1seBYc7wpKBQV6NFX72cPwfnmHtf3Zo5gnL4UDs8RQ27NbtbySy",
  "key3": "3jLrvKY64xseuRncsY27LrYsRB1wPwFUeuMAdxxAB9puJmaHoHJXYSAfFetJwHMRMZAb5cVbFXybpnpyAjT3Lg15",
  "key4": "44jet499RRqWh6oTmashE8fa2znBGTtgmXSTNqhin2oWBN4BVgoGruQGV72ZndFrAD6XGSTF4ofxmcfrYHeWeRpv",
  "key5": "5DsvdKE1KazNFMF7jzTfMHfLZs3L3Ue3cSgK6aV1LEG8yijcDZUBY5kvxFb5hnxfcvTthKbnLgQ2JL6xV95kcsQh",
  "key6": "WHWhmRLjCFtvG4gVkwr1rdVA7fNDMDXEBS7BhEZMh6eUeme5VLy3gZFNMZ947qUUoT2iAdvezavEtR1CHrS5kCA",
  "key7": "4XRGf4vcg29tb4uKQk4d1wXyxmvXqGE1MvDApSVUp4xhcVS6U6VFZK2rSm3KCNe8TNweagkwDKT5RN3j4Jdcrd1T",
  "key8": "4KTNqn8v121tzmYmuTmLssLZkYCgCGNGkdTbGtAHxSQduheEE8YjWMNxYDMAmRmz81LpmW86MtfWPDaA8MjziJ8L",
  "key9": "2ygsbpRSSjGLcbKq1xhiGNpDP3AqhLVdEadHq7bVVQebwRoaopz365ktv3GNVzLS4fqom2qpvjirmSw2fW2K2bdw",
  "key10": "3CvUSra3kTxAWHho2fzpVrGLraNMrJ4uptFcVhoAcPpWCUDJF3tupox4ZvBgDuWN3V9h989BqTwSqbwnMtNVrU95",
  "key11": "3544iBPsyygRYSegYV3S54uNAS6U8Y9949srx7iGtDJsNCkkNUcSt7JxpZntwpjxWSk6JeszLffQBKYteNdC22Cr",
  "key12": "5NG875HrVa92QpT2jiPn5jQwsEx657JtF4hZfA1JKzAU4mD8HoHZHceSZisAPWoAkA3b5rUtvBSDp8derebpAPRP",
  "key13": "4z32rTAADZyG31yGAnxH5kb8aDeMrnsLUFK992mcXFmfjkE4y4HZ7dCUzLZiFWogkaLKT76y1Wb9BJpyNhRJvfvD",
  "key14": "5JFWLXMpAE2UxQdyZmSRujVuagoGPVixiM1AM1MK7jP2Ljn9gkhKmaBkNaosL41nn1CxquBgDBGKETbjVtjFoFKb",
  "key15": "66EqgnPhJCeb6tmCpp2fJQVSwpsPsjRExU8WooKXaPfWaBoBF5mceTjqfTeNAbkg1jt56cWn43iMUdHkoJnYcjCX",
  "key16": "56nbtMdZYYX6X7mc2WTH17VmFcRcMKVUP7QK7GnihRFpe8nxprmjsCLA2s2Q5TUiM7W4cr7s2qqQLStbP96AKtFc",
  "key17": "3WiAgYw1JkqgDphxaWuQoWHNQUF6ZtL3E9scD6VfpqL1VaMymGpRnq8SSx4a3VX5ep37qYMkV8UqAVNU1qQf4G3g",
  "key18": "3iD4198W3vRaU7MKaADQR1M6aeTFcZAVKVXA29aodPwEYi4WoLF1TyFB3xR72WSudMyNjiMuSSsUAFmysZxSXL9m",
  "key19": "3HYFv2tFyA9GzTUCfUuSC6QLfnvcr1Y8qprcxkXtgD198dg5HqSiQKRkUCpFYa3GYpmzzugtzwzbc67tzWCGBW4Y",
  "key20": "3wahguJmrmMuNDccmv6bUkrEuPr2jadQ6V88vL4oCmYnjRZpKgcs71gEfifV6dkGJVhDCXa4KU9DaGRdAbo7Lf8K",
  "key21": "397PSP7eaR11PucbDEirDUmiyFRdBz3RaNzh3Vvt5XigXxjzC4d8op4X2v6JcAL7xmCUgFyCXvAWtqeoGJKujy35",
  "key22": "5BgVNe37CJaShuFi51ucgzY9Rrq3YuKhrifJBhncJcQSKDFRMKjEkQnspBZTucccpqepbnWvtAwCRAxCoNN8sE2E",
  "key23": "3GqhUZ7QnPbsWqZrjX2WspN6EtgvkUzMvDVDtEarK5dhsVxroUCPF4sRLDRkxcy5scehUS33zFBWj8ySSRRECdC7",
  "key24": "2VBPbV2g2G3jJxq4yBxJfExRwkXDfhv3GosPadCNs18Qne8jUQzBTypnYKP1tbuDjBcytazPcRur9QkxGGAHcacb",
  "key25": "4kiiUbsfG8qMDXQo3jbmDa7kTJPMDYtJp6favH5dpvpT6VfoxmfrzPejUdChoZ4AWML2mRJ9HKt2CgbmUVUvx1To",
  "key26": "4TgXhEZK38fxM4oYZL1K4fQ5wLfDzxvRH9kBsms1MFehzbSg157tq9oUmHYzqTaTeDjAeDLuaiuSEP9LoMSzdmit",
  "key27": "2FikNb1JF94Up9PpnvQSFobTAZUHfdEizmpsBsbbp31T9KCWs9o3DUiQAbLvq81HSYh5DnpoNBY5AibaqnwRppwH"
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
